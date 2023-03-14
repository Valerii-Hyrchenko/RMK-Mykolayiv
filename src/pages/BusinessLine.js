import { AssemblyCard } from "../Components/AssemblyCard";
import { ProjectsCard } from "../Components/ProjectsCard";
import { DistributionCard } from "../Components/DistributionCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { linkStyle } from "../Components/reusedStyledComponents";

export const BusinessLine = () => {
  return (
    <ItemsFlexWrapper>
      <Link to="/assembly_details" style={linkStyle}>
        <AssemblyCard />
      </Link>
      <Link to="/projects_details" style={linkStyle}>
        <ProjectsCard />
      </Link>
      <Link to="/distribution_details" style={linkStyle}>
        <DistributionCard />
      </Link>
    </ItemsFlexWrapper>
  );
};

const ItemsFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
      transform: scale(1, 1);
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1200px) {
    margin-top: 20px;
  }

  @media (max-width: 1090px) {
    margin-top: 0;

    & > a {
      max-width: 190px;
      max-height: 270px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    & > a {
      max-width: 100%;
    }
  }
`;
