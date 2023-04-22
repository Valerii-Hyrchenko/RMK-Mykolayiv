import Header from "./sections/Header";
import Logo from "./Components/forHeader/Logo";
import Home from "./sections/Home";
import BusinessLine from "./sections/BusinessLine";
import AboutCompany from "./sections/AboutCompany";
import Mission from "./sections/Mission";
import ProjectStages from "./sections/ProjectStages";
import Contacts from "./sections/Contacts";
import News from "./sections/News";
import ScrollToTopBtn from "./Components/ScrollToTopBtn";
import { PagesContext } from "./context/pagesContext";
import GeneralPageContainer from "./Components/GeneralPageContainer";
import { useEffect, useContext, useState } from "react";

const App = () => {
  const [isScrollToTopBtn, setIsScrollToTopBtn] = useState(false);
  const {
    isHideHome,
    setIsHideHome,
    setIsPageReloaded,
    homeRef,
    isClickOnNavMenu,
  } = useContext(PagesContext);

  const hideHomeSectionAnim = () => {
    let scrollLevel = window.scrollY;
    let homeSectHeight = homeRef.current.clientHeight;
    if (!isHideHome && scrollLevel > 0 && scrollLevel < homeSectHeight) {
      setIsHideHome(true);
      if (!isClickOnNavMenu) setTimeout(() => window.scrollTo(0, 0), 800);
    }
    setIsScrollToTopBtn(
      scrollLevel > window.screen.height * 0.5 && homeSectHeight === 0
    );
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsHideHome(true);
      setIsPageReloaded(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", hideHomeSectionAnim);
    return () => window.removeEventListener("scroll", hideHomeSectionAnim);
  }, [isClickOnNavMenu, isHideHome]);

  return (
    <>
      <Header />
      <Logo />
      <Home homeRef={homeRef} />
      <GeneralPageContainer>
        <BusinessLine />
        <AboutCompany />
        <Mission />
        <ProjectStages />
        <Contacts />
        <News />
      </GeneralPageContainer>
      {isScrollToTopBtn ? <ScrollToTopBtn /> : null}
    </>
  );
};

export default App;
