import { AssemblyCard } from "../Components/AssemblyCard";
import { AssemblyInfo } from "../Components/AssemblyInfo";
import styled from "styled-components";

export const AssemblyDetails = () => {
  return (
    <AssemblyDetailsFlexWrap>
      <AssemblyCard />
      <AssemblyInfo />
    </AssemblyDetailsFlexWrap>
  );
};

const AssemblyDetailsFlexWrap = styled.div`
  margin-top: 40px;
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
  }

  @media (max-width: 800px) {
    margin: 0 auto;
    flex-direction: column;
  }
`;
