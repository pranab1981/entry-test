import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // The first thing I notice is that the form is not being submitted correctly. Mainly the form gets refreshed after the submit.
    // This is because the default behavior of the form submission is not being prevented.
    // To fix this, we can call e.preventDefault() in the handleSubmit function.
    e.preventDefault();

    // The second thing I notice is that the form data is not being passed to the onLogin function correctly.
    // To fix this, we can pass the formData object directly to the onLogin function.
    onLogin(formData);
  };

  return (
    <div className="login-form-container">
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
