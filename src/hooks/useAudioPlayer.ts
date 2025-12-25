import { useState, useRef, useEffect, useCallback } from "react";

interface UseAudioPlayerProps {
  slokaId: number;
}

interface UseAudioPlayerReturn {
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
  duration: number;
  currentTime: number;
  audioUrl: string | null;
  hasAudio: boolean;
  togglePlayback: () => void;
  resetPlayback: () => void;
  seekTo: (percent: number) => void;
  formatTime: (seconds: number) => string;
}

export const useAudioPlayer = ({ slokaId }: UseAudioPlayerProps): UseAudioPlayerReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format time in mm:ss
  const formatTime = useCallback((seconds: number): string => {
    if (isNaN(seconds) || seconds === 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  // Fetch audio URL from local public folder
  useEffect(() => {
    const fetchAudioUrl = async () => {
      setIsLoading(true);
      setHasAudio(false);
      setAudioUrl(null);
      
      try {
        // Try to load audio from public/audio folder
        // Support multiple formats: mp3, wav, ogg, m4a
        // Support both naming conventions: sloka-11.mp3 and sloka_11.mp3
        const formats = ['mp3', 'wav', 'ogg', 'm4a'];
        const basePath = '/audio';
        const fileNamePatterns = [
          `sloka_${slokaId}`,  // underscore format (current files)
          `sloka-${slokaId}`   // hyphen format (alternative)
        ];
        
        let foundAudio = false;
        
        // Try each naming pattern and format combination
        for (const fileName of fileNamePatterns) {
          for (const format of formats) {
            const audioPath = `${basePath}/${fileName}.${format}`;
            
            // Check if file exists by trying to fetch it
            try {
              const response = await fetch(audioPath, { method: "HEAD" });
              if (response.ok) {
                setAudioUrl(audioPath);
                setHasAudio(true);
                foundAudio = true;
                break;
              }
            } catch (error) {
              // Continue to next format
              continue;
            }
          }
          
          if (foundAudio) break;
        }
        
        if (!foundAudio) {
          console.log(`Audio file not found for sloka ${slokaId}. Expected: public/audio/sloka_${slokaId}.mp3`);
        }
      } catch (error) {
        console.error("Error loading audio:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudioUrl();
  }, [slokaId]);


  // Set up audio element
  useEffect(() => {
    if (!audioUrl) return;

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setHasAudio(true); // Confirm audio is available when metadata loads
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleError = () => {
      console.error("Audio playback error");
      setHasAudio(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [audioUrl]);

  // Reset state when sloka changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, [slokaId]);

  const togglePlayback = useCallback(() => {
    if (!audioRef.current || !hasAudio) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, hasAudio]);

  const resetPlayback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    setProgress(0);
    setCurrentTime(0);
    setIsPlaying(false);
  }, []);

  const seekTo = useCallback((percent: number) => {
    if (!audioRef.current || !hasAudio) return;
    const newTime = (percent / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(percent);
    setCurrentTime(newTime);
  }, [hasAudio]);

  return {
    isPlaying,
    isLoading,
    progress,
    duration,
    currentTime,
    audioUrl,
    hasAudio,
    togglePlayback,
    resetPlayback,
    seekTo,
    formatTime,
  };
};
