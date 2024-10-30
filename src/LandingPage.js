import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FormStyles.css';

function LandingPage() {
  const navigate = useNavigate();
  
  // Dummy data for the dashboard
  const dashboardData = {
    totalSwipes: 150, // Total meal plan swipes
    remainingSwipes: 85, // Current remaining swipes
    donatedSwipes: 0, // Number of swipes donated
    receivedSwipes: 0, // Number of swipes received
  };

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

        {/* Dashboard */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Your Meal Plan Dashboard</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem'
          }}>
            {/* Dashboard Cards */}
            <div style={{ 
              padding: '1rem',
              backgroundColor: '#f8fafc',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>Total Meal Plan Swipes</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#334155' }}>{dashboardData.totalSwipes}</p>
            </div>
            
            <div style={{ 
              padding: '1rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>Remaining Swipes</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534' }}>{dashboardData.remainingSwipes}</p>
            </div>

            <div style={{ 
              padding: '1rem',
              backgroundColor: '#eff6ff',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>Swipes Donated</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>{dashboardData.donatedSwipes}</p>
            </div>

            <div style={{ 
              padding: '1rem',
              backgroundColor: '#fef2f2',
              borderRadius: '0.375rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>Swipes Received</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b' }}>{dashboardData.receivedSwipes}</p>
            </div>
          </div>
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