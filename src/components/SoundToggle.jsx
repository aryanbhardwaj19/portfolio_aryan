import { useState, useEffect, useRef } from "react";

const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("/f1_theme.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
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
