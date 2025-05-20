import React from "react";
import "./Welcome.css";

function Welcome({ userName, onLogout }) {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 data-test="welcome">Welcome, {userName}!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
