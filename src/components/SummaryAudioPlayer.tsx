import { useState, useRef, useEffect, useCallback } from "react";
import { Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SummaryAudioPlayerProps {
  text: string;
  language: string;
}

// Map language codes to SpeechSynthesis language codes
const languageMap: Record<string, string> = {
  english: "en-US",
  hindi: "hi-IN",
  tamil: "ta-IN",
  telugu: "te-IN",
  kannada: "kn-IN",
  malayalam: "ml-IN",
};

export const SummaryAudioPlayer = ({ text, language }: SummaryAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      console.warn("SpeechSynthesis API is not supported in this browser");
    }
    // Trigger voice load in some browsers
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  // Cleanup on unmount or text change
  useEffect(() => {
    return () => {
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
      setIsPlaying(false);
    };
  }, [text]);

  const togglePlayback = useCallback(() => {
    if (!text || text.trim().length === 0) {
      toast.error("No text to read");
      return;
    }

    if (isPlaying) {
      // Stop any playback
      if (synthRef.current && synthRef.current.speaking) synthRef.current.cancel();
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    // Attempt native TTS if voice available
    try {
      const voices = typeof window !== "undefined" && "speechSynthesis" in window
        ? window.speechSynthesis.getVoices()
        : [];

      const langKey = language.toLowerCase();
      const desiredLang = languageMap[langKey] || "en-US";

      const matching = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(desiredLang.split('-')[0]));

      if (matching && synthRef.current) {
        if (synthRef.current.speaking) synthRef.current.cancel();
        const utterance = new SpeechSynthesisUtterance(text.trim());
        utterance.lang = desiredLang;
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = (event) => {
          console.error("Speech synthesis error:", event);
          toast.error("Failed to read text via native TTS. Falling back...");
          setIsPlaying(false);
        };
        utteranceRef.current = utterance;
        synthRef.current.speak(utterance);
        setIsPlaying(true);
        setIsFallback(false);
        return;
      }
    } catch (err) {
      console.warn("Native TTS check failed:", err);
    }

    // Fallback to server-side TTS
    const TTS_API_URL = (import.meta as any).env?.VITE_TTS_API_URL || "";
    if (!TTS_API_URL) {
      toast.error("No TTS voices available and no fallback configured.");
      return;
    }

    setIsFallback(true);
    setIsPlaying(true);

    (async () => {
      try {
        const resp = await fetch(TTS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text.trim(), language: language.toLowerCase() }),
        });

        if (!resp.ok) {
          const msg = await resp.text();
          console.error("TTS API error:", resp.status, msg);
          toast.error("TTS server error. See console.");
          setIsPlaying(false);
          setIsFallback(false);
          return;
        }

        const blob = await resp.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audioRef.current = audio;
        audio.onended = () => {
          setIsPlaying(false);
          setIsFallback(false);
          URL.revokeObjectURL(url);
        };
        audio.onerror = (e) => {
          console.error("Audio playback error:", e);
          toast.error("Failed to play TTS audio.");
          setIsPlaying(false);
          setIsFallback(false);
          URL.revokeObjectURL(url);
        };
        await audio.play();
      } catch (error) {
        console.error("Fallback TTS error:", error);
        toast.error("Failed to generate TTS audio.");
        setIsPlaying(false);
        setIsFallback(false);
      }
    })();
  }, [text, language, isPlaying]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={togglePlayback}
      className="h-8 w-8 rounded-full hover:bg-gold/10"
      title="Listen to summary"
    >
      {isPlaying ? (
        <Pause className="w-4 h-4 text-primary" />
      ) : (
        <Volume2 className="w-4 h-4 text-primary" />
      )}
    </Button>
  );
};
