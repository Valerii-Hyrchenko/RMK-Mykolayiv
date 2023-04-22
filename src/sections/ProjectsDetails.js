import ProjectsCard from "../Components/cards/ProjectsCard";
import ProjectsInfo from "../Components/businessLineDetails/ProjectsInfo";
import styled from "styled-components";
import { memo } from "react";

const ProjectsDetails = () => {
  return (
    <ProjectsDetailsFlexWrap>
      <ProjectsCard />
      <ProjectsInfo />
    </ProjectsDetailsFlexWrap>
  );
};

export default memo(ProjectsDetails);

const ProjectsDetailsFlexWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-top: 20px;
    align-items: flex-end;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
