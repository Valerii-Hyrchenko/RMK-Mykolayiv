import { createContext, useState } from "react";

export const PagesContext = createContext();

const Context = (props) => {
  const [currentPage, setCurrentPage] = useState({});

  const choosePage = (page) => setCurrentPage(page);

  const value = {
    choosePage,
    currentPage,
  };

  return (
    <PagesContext.Provider value={value}>
      {props.children}
    </PagesContext.Provider>
  );
};

export default Context;
