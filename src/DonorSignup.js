// DonorSignup.js
import React, { useState } from 'react';
import './FormStyles.css';

function DonorSignup() {
  const [uni, setUni] = useState('');
  const [swipes, setSwipes] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(`Successfully donated ${swipes} swipe(s)!`);
    setSwipes('');
    setUni('');
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Donate Your Swipes</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <input
            type="text"
            placeholder="Enter your UNI"
            value={uni}
            onChange={(e) => setUni(e.target.value)}
            required
          />
          <input
            type="number"
            min="1"
            max="20"
            placeholder="Enter number of swipes"
            value={swipes}
            onChange={(e) => setSwipes(e.target.value)}
            required
          />
          <button type="submit">Donate</button>
          {message && <p className="success-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default DonorSignup;