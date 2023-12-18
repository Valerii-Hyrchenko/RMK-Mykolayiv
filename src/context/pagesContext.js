import { createContext, useRef, useState } from "react";

export const PagesContext = createContext();

const Context = (props) => {
  const [currentDetails, setCurrentDetails] = useState({ id: "noChosen" });
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isHideHome, setIsHideHome] = useState(false);
  const [isPageReloaded, setIsPageReloaded] = useState(false);
  const [isClickOnNavMenu, setIsClickOnNavMenu] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isMenuHide, setIsMenuHide] = useState(false);
  const headerRef = useRef(null);
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
    isCheckboxChecked,
    setIsCheckboxChecked,
    isMenuHide,
    setIsMenuHide,
    selectedArticle,
    setSelectedArticle,
    headerRef,
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
