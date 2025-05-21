import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (formData) => {
    // In a real app, you would validate credentials here
    setIsLoggedIn(true);
    setUserName(formData.name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <Router>  
      <div className="App">
        <Routes>  
          <Route 
            path="/" 
            element={
              !isLoggedIn ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <Welcome userName={userName} onLogout={handleLogout} />
              )
            } 
          />
          <Route 
            path="/welcome" 
            element={
              isLoggedIn ? (
                <Welcome userName={userName} onLogout={handleLogout} />
              ) : (
                <Navigate to="/" replace />  
              )
            } 
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
