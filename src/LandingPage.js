import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getHelloTest } from './api/donorService';
import './LandingPage.css';

function LandingPage() {
  const [testMessage, setTestMessage] = useState('');

  const handleTestConnection = async () => {
    try {
      const response = await getHelloTest();
      setTestMessage(response.message);
    } catch (error) {
      setTestMessage('Failed to connect to the donor service.');
    }
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Care2Share</h1>
        <p>Turn unused meal swipes into opportunities for community care.</p>
      </header>

      <section className="cta-buttons">
        <Link to="/donor-signup" className="cta-button">Donate Your Swipes</Link>
        <Link to="/recipient-signup" className="cta-button">Claim Donated Swipes</Link>
        <button onClick={handleTestConnection} className="cta-button">
          Test Microservice Connection
        </button>
      </section>

      {testMessage && <p>{testMessage}</p>}

      <footer className="footer">
        <p>© 2024 Care2Share. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
