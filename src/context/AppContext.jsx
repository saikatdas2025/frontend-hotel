import { createContext, useContext, useState } from "react";
import { isUserLoggedIn } from "../apiRequest/User";
import { useEffect } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isUserLoggedIn().then((res) => {
      setIsLoggedIn(res);
    });
  }, []);
  return (
    <AppContext.Provider value={isLoggedIn}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
