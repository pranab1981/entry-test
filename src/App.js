import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Handle Login and redirect to Welcome page
  const handleLogin = (formData) => {
    const { name, password } = formData;

    // Sanity check: To be sure the user fills the form
    if (name.length && password.length) {
      setIsLoggedIn(true);
      setUserName(name);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

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
