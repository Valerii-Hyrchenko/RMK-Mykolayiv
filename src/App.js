import styled from "styled-components";
import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Logo } from "./Components/Logo";
import { BusinessLine } from "./pages/BusinessLine";
import { AboutCompany } from "./pages/AboutCompany";
import { ContactsPage } from "./pages/ContactsPage";
import { NewsPage } from "./pages/NewsPage";
import { AssemblyDetails } from "./pages/AssemblyDetails";
import { ProjectsDetails } from "./pages/ProjectsDetails";
import { DistributionDetails } from "./pages/DistributionDetails";
import { Footer } from "./Components/Footer";
import { headerUkr } from "./contentSettings/configs";
import { PagesContext } from "./context/pagesContext";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

const App = () => {
  const { currentPage } = useContext(PagesContext);
  return (
    <AppContainer currentPage={currentPage}>
      <ContentContainer>
        <Header />
        {currentPage.id ? <Logo /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_company" element={<AboutCompany />} />
          <Route path="/business_line" element={<BusinessLine />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/assembly_details" element={<AssemblyDetails />} />
          <Route path="/projects_details" element={<ProjectsDetails />} />
          <Route
            path="/distribution_details"
            element={<DistributionDetails />}
          />
        </Routes>
      </ContentContainer>
      {currentPage.id ? <Footer /> : null}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: rgb(255, 255, 255);
  ${({ currentPage }) =>
    currentPage.id
      ? `
      background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(45,155,56,0.25) 100%);
      height: 100vh;

      @media (max-width: 800px) {
        height: 100%;
      }
    `
      : `height: 95vh;`};

  ${({ currentPage }) =>
    currentPage.text === headerUkr[3].text ? `height: 100%;` : null}
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 1090px;
  }

  @media (max-width: 1090px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 550px;
  }

  @media (max-width: 550px) {
    max-width: 480px;
  }

  @media (max-width: 480px) {
    max-width: 360px;
  }

  @media (max-width: 360px) {
    max-width: 320px;
  }
`;

export default App;
