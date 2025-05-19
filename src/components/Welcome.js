import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome({ userName, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome, {userName}!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
