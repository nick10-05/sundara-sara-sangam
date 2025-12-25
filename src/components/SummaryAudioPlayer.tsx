import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
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
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      console.warn("SpeechSynthesis API is not supported in this browser");
    }
  }, []);

  // Cleanup on unmount or text change
  useEffect(() => {
    return () => {
      if (synthRef.current && synthRef.current.speaking) {
        synthRef.current.cancel();
      }
      setIsPlaying(false);
    };
  }, [text]);

  const togglePlayback = useCallback(() => {
    if (!synthRef.current) {
      toast.error("Text-to-speech is not supported in your browser");
      return;
    }

    if (!text || text.trim().length === 0) {
      toast.error("No text to read");
      return;
    }

    if (isPlaying) {
      // Stop speaking
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      // Start speaking
      if (synthRef.current.speaking) {
        synthRef.current.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text.trim());
      const langCode = languageMap[language.toLowerCase()] || "en-US";
      utterance.lang = langCode;
      utterance.rate = 0.9; // Slightly slower for better comprehension
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event);
        toast.error("Failed to read text. Please try again.");
        setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
      setIsPlaying(true);
    }
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
