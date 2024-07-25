import React, { useEffect, useState } from 'react';
import './GradientAnimation.css';

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};

const prompts = [
  "Change my wallpaper to orange",
  "Send my schedule to Safwan over iMessage",
  "Set a reminder for my meeting at 3 PM",
  "Play my favorite playlist on Spotify",
  "Turn on the living room lights",
  "What's the weather today?",
  "Open Safari and go to GitHub",
  "Send an email to my boss",
  "Start a 10-minute timer",
  "Find the nearest coffee shop"
];

const GradientAnimation = () => {
  const [colors, setColors] = useState([randomColor(), randomColor(), randomColor()]);
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors([randomColor(), randomColor(), randomColor()]);
    }, 3000); // Set interval to 3 seconds for smoother transitions

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100; // Faster deletion speed
    const typeEffect = setInterval(() => {
      if (isDeleting) {
        setCurrentPrompt((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentPrompt((prev) => prev + prompts[promptIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }
    }, typeSpeed);

    if (!isDeleting && charIndex === prompts[promptIndex].length) {
      clearInterval(typeEffect);
      setTimeout(() => setIsDeleting(true), 2000); // Start deleting after 2 seconds
    } else if (isDeleting && charIndex === 0) {
      clearInterval(typeEffect);
      setIsDeleting(false);
      setPromptIndex((prev) => (prev + 1) % prompts.length);
    }

    return () => clearInterval(typeEffect);
  }, [charIndex, isDeleting, promptIndex]);

  return (
    <div className="gradient-container">
      <div className="gradient-background"></div>
      <div className="content">
        <div className="input-container">
          <div className="text-output">
            <span className="typed-text">{currentPrompt}</span>
            <span className="typing-indicator">|</span>
          </div>
          <button
            className={`mic-button ${isMicrophoneActive ? 'active' : ''}`}
            onClick={() => setIsMicrophoneActive(!isMicrophoneActive)}
          >
            <img src="/mic.fill.png" alt="Mic" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradientAnimation;