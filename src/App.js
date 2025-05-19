import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (formData) => {
    // This function acts as a callback to handle the login process.
    // It receives the form data from the LoginForm component and updates the login state and user name.
    setIsLoggedIn(true);
    setUserName(formData.name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  // The app uses conditional rendering to display either the login form or the welcome message based on the user's login status.
  // To make the login functionality work, we need to ensure that the form data is passed correctly to the handleLogin function.
  // The handleLogin function sets the login state and the user name based on the form data.
  // and based on the login status, it either shows the login form or a welcome message with a logout button.

  return (
    <div className="App">
      {isLoggedIn ? (
        <Welcome userName={userName} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
