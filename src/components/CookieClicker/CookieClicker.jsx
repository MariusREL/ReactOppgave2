import React, { useState } from 'react';
import './CookieClicker.css';

const CookieClicker = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="cookie-clicker">
      <h2>cookie</h2>
      <p>cookies clicked: {score}</p>
      <button onClick={handleClick}>
        <img src="/cookie.png" alt="Cookie" />
      </button>
    </div>
  );
};

export default CookieClicker;
