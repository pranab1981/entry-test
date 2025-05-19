import React, { useState } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // In a real app, you would validate credentials here
    setIsLoggedIn(true);
    setUserName(formData.name);

    // Explanation - Redirecting was not working because there was no setup of react router and 
    // only conditional rendering was taking place. So i added navigate which is initialised using useNavigate
    // hook of react-router-dom.

    navigate("/Welcome")
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/welcome" />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/welcome"
        element={
          isLoggedIn ? (
            <Welcome userName={userName} onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
