import { ProjectsCard } from "../Components/ProjectsCard";
import { ProjectsInfo } from "../Components/ProjectsInfo";
import styled from "styled-components";

export const ProjectsDetails = () => {
  return (
    <ProjectsDetailsFlexWrap>
      <ProjectsCard />
      <ProjectsInfo />
    </ProjectsDetailsFlexWrap>
  );
};

const ProjectsDetailsFlexWrap = styled.div`
  margin-top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: showPage;
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;
  position: relative;
  z-index: 5;

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
    margin-top: -40px;
  }

  @media (max-width: 1090px) {
    margin-top: -30px;
    align-items: flex-end;
  }

  @media (max-width: 800px) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }
`;
