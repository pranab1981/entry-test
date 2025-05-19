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

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData)
  }
  
  const isDisabled = formData.name == "" || formData.password == "";

  return (
    <div className="login-form-container">
      <form onSubmit={(e) => {handleSubmit(e)}} className="login-form">
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
        <button type="submit" disabled={isDisabled} className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm; 