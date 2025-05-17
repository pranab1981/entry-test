import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onLogin(formData);
    if (!success) {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {/* Test Credentials Info */}
        <div className="test-credentials">
          <p>Test Credentials:</p>
          <code>
            Username: zipboard_test
            <br />
            Password: ZipBoard@2025
          </code>
        </div>

        {errorMessage && (
          <div className="error-message" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
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
            aria-required="true"
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
