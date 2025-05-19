import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { LOCALSTORAGE_USERNAME_KEY } from "../../constants/auth";

/**
 * @type {React.Context<import('./types').AuthProviderInformation>}
 */
export const AuthContext = createContext({
  setUser: (info) => {},
  init: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [init, setState] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem(LOCALSTORAGE_USERNAME_KEY);

    if (username)
      setUser(() => ({
        name: username,
      }));

    setState(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser: setUser,
        user,
        init,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
