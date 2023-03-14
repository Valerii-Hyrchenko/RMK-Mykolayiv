import styled from "styled-components";
import { Logo } from "../Components/Logo";

import backgroundImg from "../assets/img/home_background.webp";

export const Home = () => {
  return (
    <HomeContentWrapper>
      <BackgroundWrap>
        <Logo />
        <Background src={backgroundImg} alt="home_background" />
      </BackgroundWrap>
    </HomeContentWrapper>
  );
};

const HomeContentWrapper = styled.div`
  margin: 20px 0 30px;
  animation-name: showHomePage;
  animation-duration: 2800ms;
  transition-timing-function: ease-in-out;

  @keyframes showHomePage {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const BackgroundWrap = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
`;
