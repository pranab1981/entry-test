import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure onLogin exists before calling
    if (typeof onLogin === 'function') {
      onLogin(formData);  // Pass form data to callback
    }
  };

  return (
    <div className="login-form-container" data-testid="login-form">
      <form className="login-form" onSubmit={handleSubmit}>
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
            data-testid="name-input"
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
            data-testid="password-input"
          />
        </div>
        <button 
          type="submit" 
          className="login-button"
          data-testid="submit-button"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;