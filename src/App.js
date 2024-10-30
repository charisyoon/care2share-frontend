// App.js 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import LandingPage from './LandingPage';
import DonorSignup from './DonorSignup';
import RecipientSignup from './RecipientSignup';

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem('isLoggedIn') ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<ProtectedRoute><LandingPage /></ProtectedRoute>} />
        <Route path="/donor-signup" element={<ProtectedRoute><DonorSignup /></ProtectedRoute>} />
        <Route path="/recipient-signup" element={<ProtectedRoute><RecipientSignup /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;