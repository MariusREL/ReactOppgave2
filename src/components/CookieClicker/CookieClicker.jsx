import React, { useState } from 'react';
import './CookieClicker.css';
import cookieImage from '../../assets/cookie.png'; 

const CookieClicker = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="cookie-clicker">
      <h2>Cookie Clicker</h2>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>
        <img
          src={cookieImage} 
          alt="Image of a Cookie"
        />
      </button>
    </div>
  );
};

export default CookieClicker;
