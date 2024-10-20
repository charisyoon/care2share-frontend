import React, { useState } from 'react';
import './FormStyles.css';

function RecipientSignup() {
  const [claimedSwipes, setClaimedSwipes] = useState(0);

  const handleClaim = (event) => {
    event.preventDefault();
    alert(`You have successfully claimed ${claimedSwipes} swipe(s)!`);
    setClaimedSwipes(0); // Reset form after submission
  };

  return (
    <div className="form-container">
      <h2>Claim Donated Swipes</h2>
      <form onSubmit={handleClaim}>
        <input 
          type="number" 
          min="1" 
          value={claimedSwipes} 
          onChange={(e) => setClaimedSwipes(e.target.value)} 
          placeholder="Enter number of swipes to claim"
          required
        />
        <button type="submit">Claim</button>
      </form>
    </div>
  );
}

export default RecipientSignup;
