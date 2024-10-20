import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import LandingPage from './LandingPage';
import DonorSignup from './DonorSignup';
import RecipientSignup from './RecipientSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login is the initial page */}
        <Route path="/landing" element={<LandingPage />} /> {/* Original landing page */}
        <Route path="/donor-signup" element={<DonorSignup />} />
        <Route path="/recipient-signup" element={<RecipientSignup />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
