import React, { useState, useEffect } from 'react';
import './App.css';
import GradientAnimation from './GradientAnimation';

const themes = {
  light: {
    body: '#f7f7f7',
    text: '#333333',
    background: '#ffffff',
    shadow: 'rgba(0, 0, 0, 0.1)',
    secondaryText: '#666666',
  },
  dark: {
    body: '#181818',
    text: '#ffffff',
    background: '#282828',
    shadow: 'rgba(0, 0, 0, 0.7)',
    secondaryText: '#999999',
  },
};

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [themeMode, setThemeMode] = useState('system');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedThemeMode = localStorage.getItem('themeMode') || 'system';
    setThemeMode(savedThemeMode);
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      if (themeMode === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(mediaQuery.matches ? themes.dark : themes.light);
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else {
        setTheme(themeMode === 'dark' ? themes.dark : themes.light);
      }
    };

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? themes.dark : themes.light);
    };

    applyTheme();
  }, [themeMode]);

  useEffect(() => {
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
  }, [theme]);

  const handleThemeChange = (mode: string) => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <div className="logo-text">MacGic</div>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#updates">Updates</a>
          <button className="download-button">
            <img src="/octocat.png" alt="GitHub Logo" />
            GitHub Download
          </button>
        </nav>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </header>
      <main className="main">
        <h2 className="title">Makes it seem like MacGic</h2>
        <p className="subtitle">A minimalist approach to whole system automation</p>
        <GradientAnimation />
        <ul className="feature-list">
          <li className="feature-item">Automate your entire system with voice commands</li>
          <li className="feature-item">Effortlessly control your macOS environment</li>
          <li className="feature-item">Integrate voice-activated workflows for enhanced productivity</li>
        </ul>
      </main>
      <footer className="footer">
        <div className="theme-toggle">
          <button onClick={() => handleThemeChange('light')} className={themeMode === 'light' ? 'active' : ''}>Light</button>
          <button onClick={() => handleThemeChange('dark')} className={themeMode === 'dark' ? 'active' : ''}>Dark</button>
          <button onClick={() => handleThemeChange('system')} className={themeMode === 'system' ? 'active' : ''}>System</button>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;