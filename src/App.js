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

  /*
  The issue with this app was that the Login page, and the main page (<App/>) in which the login form is rendered, were not connected. 
  So they were not really communicating. My first gaze went to how the parameter functions were being called. 
  In this case, they were not being called at all. 
  Then in the Login component/ file, I noticed that onLogin was never called. 
  I tried playing around with how to call it and see what is its scope in the file. 
  Secondly, the submit button and the form were not connected either, since there was no onSubmit as a param for the <form> component.
  I added changes so that the form is properly submitted, after gaining insights from chatGPT about form submissions in React and digging up code from my past experience.

  Github Copilot has been trying so hard to complete all my code, and as tempting as it was, I decided to not use it and actually learn Cypress.

  Summary: 
  Issue: <LoginForm/> and <App/> were not connected. onLogin in <LoginForm/> was not being called from <App/>, preventing navigation to the Welcome screen.
  Solution: Added proper submission handling to the <form> in <LoginForm/>, while also ensuring onLogin, the main connecting function, is called.

  References: Google Chrome DevTools, Gemini enabled debugging, and ChatGPT.
  link: https://chatgpt.com/share/682bfd97-e688-8007-b54b-374a00786976
  */
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
