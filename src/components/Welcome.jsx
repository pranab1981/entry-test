import React from "react";
import "./Welcome.css";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useUserLogout } from "../hooks/useUserLogout";

function Welcome() {
  const authInfo = useContext(AuthContext);
  const { Logout: onLogout } = useUserLogout();

  return (
    <div id="welcome-screen" className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome, {authInfo?.user?.name}!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;
