import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";
import {
  AuthContext,
  AuthProvider,
} from "./providers/AuthProvider/AuthProvider";
import { useUserLogin } from "./hooks/useUserLogin";
import { useContext } from "react";
import { useUserLogout } from "./hooks/useUserLogout";

const HTMLBody = () => {
  const authInfo = useContext(AuthContext);
  if (!authInfo.init) return <></>;

  return (
    <div className="App">
      {authInfo?.user?.name ? <Welcome /> : <LoginForm />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <HTMLBody />
    </AuthProvider>
  );
}

export default App;
