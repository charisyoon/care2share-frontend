import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported correctly
import './FormStyles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Correctly initialize useNavigate

  const validAccounts = [
    { username: 'user1', password: 'password123' },
  ];

  const handleLogin = (event) => {
    event.preventDefault();

    const user = validAccounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (user) {
      navigate('/landing'); // Redirect to the landing page if login is valid
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
