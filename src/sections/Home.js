import styled from "styled-components";
import backgroundImg from "../assets/img/home_background.jpg";
import { PagesContext } from "../context/pagesContext";
import { useContext } from "react";

export const Home = ({ homeRef }) => {
  const { isHideHome } = useContext(PagesContext);
  return <HomeContent isHideHome={isHideHome} ref={homeRef}></HomeContent>;
};

const HomeContent = styled.div`
  height: ${({ isHideHome }) => (isHideHome ? "0vh" : "100vh")};
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation-name: ${({ isHideHome }) =>
    isHideHome ? "hideHomePage" : "showHomePage"};
  animation-duration: 1200ms;
  transition-timing-function: linear;

  @keyframes showHomePage {
    0% {
      transform: scale(1, 0);
      opacity: 0;
    }

    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes hideHomePage {
    0% {
      height: 100vh;
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      height: 0vh;
      opacity: 0;
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1090px) {
  }

  @media (max-width: 550px) {
  }
`;
