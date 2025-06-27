import React, { useState, useEffect } from 'react';
import './App.css';

const Scene2 = () => {
  const [showCinematic, setShowCinematic] = useState(true);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  const dialogues = [
    "Every step in silence echoes with their blood...",
    "Even the flames remember their screams...",
    "I do not hunt them... I wait... until they forget I survived."
  ];

  useEffect(() => {
    if (showCinematic && dialogueIndex < dialogues.length) {
      const timer = setTimeout(() => {
        setDialogueIndex(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (dialogueIndex === dialogues.length) {
      setTimeout(() => setShowCinematic(false), 2000);
    }
  }, [dialogueIndex, showCinematic]);

  return (
    <div className="scene2-container">
      {showCinematic ? (
        <div className="cinematic-bg">
          <video autoPlay muted loop className="background-video">
            <source src="https://example.com/burning-temple.mp4" type="video/mp4" />
          </video>
          <div className="dialogue">
            <p>{dialogues[dialogueIndex]}</p>
          </div>
        </div>
      ) : (
        <div className="gameplay-area">
          <h2 className="objective">Stealth Kill the Enemies</h2>
          <div className="enemy">🥷 Enemy Patrol - Tap to eliminate</div>
          <button onClick={() => setShowScroll(true)} className="interact-btn">🔍 Investigate Scroll</button>
          {showScroll && (
            <div className="scroll-dialogue">
              <p>“The symbol… It’s the same as the one carved in the temple’s heart.”</p>
              <p>“The ones who started the fire… are still watching.”</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scene2;