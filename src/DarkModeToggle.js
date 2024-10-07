import React, { useState, useEffect } from 'react';
import './App.css';

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }

    // Call the onToggle function passed from parent to change images in App
    onToggle(darkMode);
  }, [darkMode, onToggle]);

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
