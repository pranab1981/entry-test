import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useState } from "react";
import { LOCALSTORAGE_USERNAME_KEY } from "../constants/auth";

export const LOGIN_STATUS = {
  LOADING: 1,
  ERROR: 2,
  SUCCESS: 3,
};

export const useUserLogin = () => {
  const authContext = useContext(AuthContext);
  const [loginStatus, setLoginStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * @param name {string}
   * @param password {string}
   */
  const Login = async (name, password) => {
    if (loginStatus === LOGIN_STATUS.LOADING) return;
    setLoginStatus(LOGIN_STATUS.LOADING);

    // Make API call to Backend server, but since this is a small frontend only assignment.
    // i'll just hardcode username & password
    if (name !== "sahil" || password !== "12345678") {
      setErrorMessage("Invalid username or password");
      setLoginStatus(LOGIN_STATUS.ERROR);
    } else {
      authContext.setUser({ name });
      localStorage.setItem(LOCALSTORAGE_USERNAME_KEY, name);
      setLoginStatus(LOGIN_STATUS.SUCCESS);
    }
  };

  return { Login, loginStatus, errorMessage };
};
