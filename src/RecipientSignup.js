import React, { useState } from 'react';
import './FormStyles.css';

function RecipientSignup() {
  const [claimedSwipes, setClaimedSwipes] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(`Successfully claimed ${claimedSwipes} swipe(s)!`);
    setClaimedSwipes('');
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Claim Donated Swipes</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <input
            type="number"
            min="1"
            max="10"
            placeholder="Enter number of swipes to claim"
            value={claimedSwipes}
            onChange={(e) => setClaimedSwipes(e.target.value)}
            required
          />
          <button type="submit">Claim</button>
          {message && <p className="success-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default RecipientSignup;