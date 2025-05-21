import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {

  //Cypress put the inputs in correctly and clicjed the button. but nothing happened, even through the user information was passed correctly
  //So far, onLogin is not being used or called.
  //therefore, no connection between the main App, the Login Form, and the Welcome screens.
  //<App/> doesn't know we have logged in. So state/ page doesn't change

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  //finally caling onLogin through the button. This SHOULD make the Login page talk to the App page. The button also has a function now.
    const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };


  return (
    <div className="login-form-container">

      {/* Got the approach from chatGPT on how basic form submissions are handled*/}
      {/* The form is supposed to be submitted, not the button. MAJOR red flag here. */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          {/* tried playing around with the name, 'id' fields to see if the Cypress script and handleChange is getting the values passed correctly */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">{/* no action when clicked??? How is the form submitted then?*/}
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm; 