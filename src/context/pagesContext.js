import { createContext, useRef, useState } from "react";

export const PagesContext = createContext();

const Context = (props) => {
  const [currentDetails, setCurrentDetails] = useState({ id: "noChosen" });
  const [isHideHome, setIsHideHome] = useState(false);
  const [isPageReloaded, setIsPageReloaded] = useState(false);
  const [isClickOnNavMenu, setIsClickOnNavMenu] = useState(false);

  const homeRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const businessLineRef = useRef(null);
  const contactsRef = useRef(null);
  const newsRef = useRef(null);

  const chooseBusinessDetails = (detailsSection) =>
    setCurrentDetails(detailsSection);

  const value = {
    isHideHome,
    setIsHideHome,
    isPageReloaded,
    setIsPageReloaded,
    currentDetails,
    chooseBusinessDetails,
    isClickOnNavMenu,
    setIsClickOnNavMenu,
    homeRef,
    businessLineRef,
    aboutCompanyRef,
    contactsRef,
    newsRef,
  };

  return (
    <PagesContext.Provider value={value}>
      {props.children}
    </PagesContext.Provider>
  );
};

export default Context;
