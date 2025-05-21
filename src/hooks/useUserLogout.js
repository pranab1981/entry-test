import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useState } from "react";
import { LOCALSTORAGE_USERNAME_KEY } from "../constants/auth";

export const LOGOUT_STATUS = {
  LOADING: 1,
  ERROR: 2,
  SUCCESS: 3,
};

export const useUserLogout = () => {
  const authContext = useContext(AuthContext);
  const [logoutStatus, setLogoutStatus] = useState(0);

  const Logout = async () => {
    if (logoutStatus === LOGOUT_STATUS.LOADING) return;
    setLogoutStatus(LOGOUT_STATUS.LOADING);

    // Make API call to Backend server to logout and invalidate the current credentials,
    // but since this is a small frontend only assignment.
    // i'll just remove the user from Browser's memory
    authContext.setUser(undefined);
    localStorage.removeItem(LOCALSTORAGE_USERNAME_KEY);

    setLogoutStatus(LOGOUT_STATUS.SUCCESS);
  };

  return { Logout, logoutStatus };
};
