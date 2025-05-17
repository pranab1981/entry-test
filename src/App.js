import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (formData) => {
    if (
      formData.name === "zipboard_test" &&
      formData.password === "ZipBoard@2025"
    ) {
      setIsLoggedIn(true);
      setUserName(formData.name);
      return true;
    }
    return false;
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
