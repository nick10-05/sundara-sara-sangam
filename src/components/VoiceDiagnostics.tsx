import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const VoiceDiagnostics: React.FC = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sampleText, setSampleText] = useState<string>(
    "This is a test of the text to speech voice."
  );
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const load = () => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      const v = window.speechSynthesis.getVoices() || [];
      setVoices(v);
      if (v.length && selectedIndex === null) setSelectedIndex(0);
    };

    load();
    // Some browsers emit voiceschanged when voices become available
    window.speechSynthesis?.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis?.removeEventListener("voiceschanged", load as any);
    };
  }, [selectedIndex]);

  const play = async () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      toast.error("SpeechSynthesis API not supported in this browser");
      return;
    }

    if (!sampleText.trim()) {
      toast.error("Enter sample text to play");
      return;
    }

    // Stop any existing
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(sampleText.trim());
    if (selectedIndex !== null && voices[selectedIndex]) {
      utter.voice = voices[selectedIndex];
    }
    utter.rate = 0.95;
    utter.onend = () => {
      utterRef.current = null;
      toast.success("Playback finished");
    };
    utter.onerror = (e) => {
      console.error("utterance error", e);
      toast.error("Playback error");
      utterRef.current = null;
    };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
    toast.success("Playing sample text");
  };

  const stop = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      utterRef.current = null;
      toast.success("Stopped");
    }
  };

  return (
    <div className="p-4 rounded-md bg-muted">
      <h3 className="mb-2 font-medium">Voice Diagnostics</h3>
      <p className="text-sm text-muted-foreground mb-3">Lists browser TTS voices and allows test playback.</p>

      <div className="mb-3">
        <label className="block text-sm mb-1">Sample text</label>
        <textarea
          className="w-full p-2 rounded border"
          rows={3}
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm mb-1">Available voices ({voices.length})</label>
        <div className="max-h-40 overflow-auto border rounded p-2 bg-white">
          {voices.length === 0 ? (
            <div className="text-sm text-muted-foreground">No voices available.</div>
          ) : (
            voices.map((v, i) => (
              <div key={`${v.name}-${i}`} className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  checked={selectedIndex === i}
                  onChange={() => setSelectedIndex(i)}
                />
                <div className="text-sm">
                  <div className="font-medium">{v.name}</div>
                  <div className="text-xs text-muted-foreground">{v.lang} {v.default ? "• default" : ""}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={play}>Play</Button>
        <Button variant="secondary" onClick={stop}>Stop</Button>
      </div>
    </div>
  );
};

export default VoiceDiagnostics;
