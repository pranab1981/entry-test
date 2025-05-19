import { useState } from "react";
import "./LoginForm.css";
import { useUserLogin, LOGIN_STATUS } from "../hooks/useUserLogin";

function LoginForm() {
  const { Login: onLogin, loginStatus, errorMessage } = useUserLogin();

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Make Login API call
    onLogin(formData.name, formData.password).catch((error) => {
      console.error("Something went wrong while logging in");
      console.error(error);
    });
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
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
            disabled={loginStatus === LOGIN_STATUS.LOADING}
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
            disabled={loginStatus === LOGIN_STATUS.LOADING}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {loginStatus === LOGIN_STATUS.ERROR && (
          <div id="login-error">{errorMessage || "Something went wrong"}</div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
