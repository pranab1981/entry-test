
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route
          path="/welcome"
          element={
            isLoggedIn ? (
              <Welcome userName={userName} onLogout={() => {
                setIsLoggedIn(false);
                setUserName('');
              }} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

// Creating  a wrapper component for the Login Form to handle login and navigation
function LoginPage({ setIsLoggedIn, setUserName }) {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    
    setIsLoggedIn(true);
    setUserName(formData.name);
    // Redirecting  to welcome page after login
    navigate('/welcome');
  };

  return <LoginForm onLogin={handleLogin} />;
}

export default App;

