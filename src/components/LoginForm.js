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
    onLogin(formData); // or however you’re calling it
  };

  return (
    <div className="login-form-container">
      <form className="login-form" data-testid="login-form" onSubmit={handleSubmit}>
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
            data-testid="input-name"
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
            data-testid="input-password"
          />
        </div>
        <button type="submit" className="login-button" data-testid="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm; 