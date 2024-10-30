// RecipientSignup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

function RecipientSignup() {
  const [claimedSwipes, setClaimedSwipes] = useState('');
  const [message, setMessage] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(`Successfully claimed ${claimedSwipes} swipe(s)!`);
    setClaimedSwipes('');
  };

  const testConnection = async () => {
    try {
      setTestMessage('Testing connection to recipient service...');
      
      // Make API call
      const response = await fetch('http://localhost:8002/');
      
      if (!response.ok) {
        throw new Error('Network response error');
      }
      
      // Parse JSON data
      const data = await response.json();
  
      const message = data["\n\nmessage"] || 'Connected to recipient service, but no message received';
      console.log(message)
      setTestMessage(message.trim());
      
    } catch (error) {
      setTestMessage('Failed to connect to recipient service');
      console.error('Error connecting to recipient service:', error);
    }
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
          
          {/* Test Connection Button */}
          <button 
            type="button" 
            onClick={testConnection}
            style={{
              backgroundColor: '#6366f1',
              marginTop: '1rem'
            }}
          >
            Test Recipient Service Connection
          </button>
          {testMessage && <p className="success-message">{testMessage}</p>}
          
          {/* Back Button */}
          <button 
            type="button" 
            onClick={() => navigate('/landing')}
            style={{
              backgroundColor: '#64748b',
              marginTop: '1rem'
            }}
          >
            Back to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecipientSignup;