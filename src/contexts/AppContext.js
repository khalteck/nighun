import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const contact = (e) => {
    e.preventDefault();
    window.location.replace(`${currentPage}#footer`);
  };

  return (
    <AppContext.Provider value={{ currentPage, contact }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
