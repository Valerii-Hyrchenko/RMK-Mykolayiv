import { useContext, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { PagesContext } from "../context/pagesContext";

const GeneralPageContainer = ({ children }) => {
  const { isHideHome, isPageReloaded } = useContext(PagesContext);
  const [isSectionAnimate, setIsSectionAnimate] = useState(false);

  useEffect(() => {
    if (isHideHome) {
      setTimeout(() => setIsSectionAnimate(true), 400);
    }
  }, [isHideHome]);
  return (
    <Container
      isSectionAnimate={isSectionAnimate}
      isPageReloaded={isPageReloaded}
    >
      {children}
    </Container>
  );
};

export default memo(GeneralPageContainer);

const Container = styled.div`
  animation-duration: 1000ms;
  transition-timing-function: ease-in-out;
  visibility: ${({ isSectionAnimate }) =>
    isSectionAnimate ? "visible" : "hidden"};
  animation-name: ${({ isSectionAnimate, isPageReloaded }) =>
    isSectionAnimate && !isPageReloaded
      ? "firstShowSection"
      : "reloadShowSection"};

  @keyframes firstShowSection {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes reloadShowSection {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
