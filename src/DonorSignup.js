import React, { useState } from 'react';
import { donateSwipes } from './api/donorService.js';

function DonorSignup() {
  const [uni, setUni] = useState('');
  const [swipes, setSwipes] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await donateSwipes(uni, swipes); // Keep the response
      setMessage(`Successfully donated ${swipes} swipe(s)! Response: ${response.status}`);
      setSwipes(0); // Reset the form
    } catch (error) {
      setMessage('Failed to donate swipes. Please try again.');
    }
  };
  

  return (
    <div className="form-container">
      <h2>Donate Your Swipes</h2>
      <form onSubmit={handleSubmit}>
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
          placeholder="Enter number of swipes"
          value={swipes}
          onChange={(e) => setSwipes(e.target.value)}
          required
        />
        <button type="submit">Donate</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DonorSignup;
