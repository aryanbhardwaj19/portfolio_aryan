import { useState, useRef, useCallback } from "react";

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/f1_theme.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
    return audioRef.current;
  }, []);

  const toggleSound = () => {
    const audio = getAudio();
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="sound-toggle-wrap">
      <button 
        className={`sound-toggle ${isPlaying ? "active" : ""}`} 
        onClick={toggleSound}
        aria-label={isPlaying ? "Mute sound" : "Unmute sound"}
      >
        <div className="sound-visual-wrap">
          {/* Circular rotating ring shadow */}
          <div className="sound-rotating-disc"></div>
          
          <div className="sound-bars-and-status">
            <div className="sound-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        
        {/* Only show label on hover (handled by CSS) */}
        <div className="sound-label-reveal">
          <span className="sound-text">{isPlaying ? "SOUND ON" : "SOUND OFF"}</span>
        </div>
      </button>
    </div>
  );
};

export default SoundToggle;
