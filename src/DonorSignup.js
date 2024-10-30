// DonorSignup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

function DonorSignup() {
  const [uni, setUni] = useState('');
  const [swipes, setSwipes] = useState('');
  const [message, setMessage] = useState('');
  const [testMessage, setTestMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(`Successfully donated ${swipes} swipe(s)!`);
    setSwipes('');
    setUni('');
  };

  const testConnection = async () => {
    try {
      setTestMessage('Testing connection to donor service...');
      
      // Make API call
      const response = await fetch('http://localhost:8001/');
      
      if (!response.ok) {
        throw new Error('Network response error');
      }
      
      // Parse JSON data
      const data = await response.json();
  
      const message = data["\n\nmessage"] || 'Connected to donor service, but no message received';
      console.log(message)
      setTestMessage(message.trim());
      
    } catch (error) {
      setTestMessage('Failed to connect to donor service');
      console.error('Error connecting to donor service:', error);
    }
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
          
          {/* Test Connection Button */}
          <button 
            type="button" 
            onClick={testConnection}
            style={{
              backgroundColor: '#6366f1',
              marginTop: '1rem'
            }}
          >
            Test Donor Service Connection
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

export default DonorSignup;