import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (formData) => {
    // In a real app, you would validate credentials here
    setIsLoggedIn(true);
    setUserName(formData.name);//this wont be called since onLogin is never called in the first place
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(''); //nothing to change or worry about here
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
