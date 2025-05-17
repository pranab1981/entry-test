import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
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
 
  //I used this function to handle the onLogin function when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault(); //preventing form from refreshing the page
    onLogin(formData);
  }

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}> {/* onSubmit event handler was missing, thats why it was not redirecting */}
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm; 