import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (formData) => {
    // In a real app, you would validate credentials here
    if (formData.name === 'suleiman' && formData.password === 'suleimanpassword'){
      setIsLoggedIn(true);
      setUserName(formData.name);
    } else {
      alert('You have provided invalid credentials')
    }
   
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
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
