import AssemblyCard from "../Components/cards/AssemblyCard";
import AssemblyInfo from "../Components/businessLineDetails/AssemblyInfo";
import styled from "styled-components";
import { memo } from "react";

const AssemblyDetails = () => {
  return (
    <AssemblyDetailsFlexWrap>
      <AssemblyCard />
      <AssemblyInfo />
    </AssemblyDetailsFlexWrap>
  );
};

export default memo(AssemblyDetails);

const AssemblyDetailsFlexWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: showPage;
  animation-duration: 800ms;
  row-gap: 75px;
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
    margin-top: 20px;
  }

  @media (max-width: 1090px) {
    margin-top: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
