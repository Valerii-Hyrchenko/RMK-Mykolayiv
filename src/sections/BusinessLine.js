import { AssemblyCard } from "../Components/cards/AssemblyCard";
import { ProjectsCard } from "../Components/cards/ProjectsCard";
import { DistributionCard } from "../Components/cards/DistributionCard";
import { SectionTitleWithArrows } from "../Components/SectionTitleWithArrows";
import { sectionsTitles } from "../contentSettings/configs";
import styled from "styled-components";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import { AssemblyDetails } from "../sections/AssemblyDetails";
import { ProjectsDetails } from "../sections/ProjectsDetails";
import { DistributionDetails } from "../sections/DistributionDetails";
import { businessLineUkr } from "../contentSettings/configs";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { PagesContext } from "../context/pagesContext";
import businessLineBg from "../assets/img/business_line_background.webp";

export const BusinessLine = () => {
  const { businessLineRef, currentDetails } = useContext(PagesContext);

  const renderChosenDetails = () => {
    switch (currentDetails.id) {
      case businessLineUkr[0].id:
        return <AssemblyDetails />;
      case businessLineUkr[1].id:
        return <ProjectsDetails />;
      case businessLineUkr[2].id:
        return <DistributionDetails />;
      default:
        return (
          <CardsFlexWrapper>
            <AssemblyCard />
            <ProjectsCard />
            <DistributionCard />
          </CardsFlexWrapper>
        );
    }
  };

  return (
    <BackgroundWrap ref={businessLineRef}>
      <SectionWrapper>
        <SectionTitleWithArrows>
          {sectionsTitles.businessLine.text}
        </SectionTitleWithArrows>
        {renderChosenDetails()}
      </SectionWrapper>
      <Footer />
    </BackgroundWrap>
  );
};

const BackgroundWrap = styled.div`
  scroll-margin-top: 100px;
  position: relative;
  padding-top: 200px;
  background-image: url(${businessLineBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 520px;
`;

const CardsFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation-name: showPage;
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes showPage {
    0% {
      opacity: 0;
      transform: translateX(-800px) scale(0.5, 0.5);
    }

    50% {
      transform: scale(0.7, 0.7);
    }

    100% {
      transform: translateX(0) scale(1, 1);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1090px) {
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
