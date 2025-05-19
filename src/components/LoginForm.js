import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Name:
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;