import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (formData) => {
    setIsLoggedIn(true);
    setUserName(formData.name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/welcome" /> : <LoginForm onLogin={handleLogin} />
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
      </Router>
    </div>
  );
}

export default App;
