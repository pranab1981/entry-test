import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/welcome" element={<WelcomeWrapper />} />
      </Routes>
    </Router>
  );
}

function LoginWrapper() {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // Simulate login
    navigate("/welcome", { state: { userName: formData.name } });
  };

  return <LoginForm onLogin={handleLogin} />;
}

function WelcomeWrapper() {
  const location = useLocation();
  const userName = location.state?.userName || "User";

  const handleLogout = () => {
    window.location.href = "/";
  };

  return <Welcome userName={userName} onLogout={handleLogout} />;
}

export default App;
