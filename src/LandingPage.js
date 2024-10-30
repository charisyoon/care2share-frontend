import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FormStyles.css';

function LandingPage() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#f3f4f6' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Care2Share</h1>
          <button 
            onClick={handleLogout}
            style={{ 
              padding: '0.5rem 1rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              width: 'auto'
            }}
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Turn unused meal swipes into opportunities for community care.
          </h2>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <Link 
            to="/donor-signup"
            style={{
              padding: '1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textAlign: 'center',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Donate Your Swipes
          </Link>
          <Link 
            to="/recipient-signup"
            style={{
              padding: '1.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              textAlign: 'center',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Claim Donated Swipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;