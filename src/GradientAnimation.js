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

  useEffect(() => {
    const interval = setInterval(() => {
      setColors([randomColor(), randomColor(), randomColor()]);
    }, 3000); // Set interval to 3 seconds for smoother transitions

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typeEffect = setInterval(() => {
      setCurrentPrompt((prev) => prev + prompts[promptIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100);

    if (charIndex === prompts[promptIndex].length) {
      clearInterval(typeEffect);
      setTimeout(() => {
        setCharIndex(0);
        setCurrentPrompt("");
        setPromptIndex((prev) => (prev + 1) % prompts.length);
      }, 2000); // Wait for 2 seconds before typing the next prompt
    }

    return () => clearInterval(typeEffect);
  }, [charIndex, promptIndex]);

  return (
    <div className="gradient-container">
      <div
        className="gradient-background"
        style={{
          background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`
        }}
      ></div>
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