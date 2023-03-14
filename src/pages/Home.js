import styled from "styled-components";
import { Logo } from "../Components/Logo";

import backgroundImg from "../assets/img/home_background.webp";
import backgroundImg550 from "../assets/img/home_background_550.webp";
import backgroundImg1090 from "../assets/img/home_background_1090.webp";
import backgroundImg1200 from "../assets/img/home_background_1200.webp";

export const Home = () => {
  return (
    <HomeContentWrapper>
      <BackgroundWrap>
        <Logo />
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
  bottom: 2%;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    background-image: url(${backgroundImg1200});
  }

  @media (max-width: 1090px) {
    background-image: url(${backgroundImg1090});
  }

  @media (max-width: 550px) {
    background-image: url(${backgroundImg550});
  }
`;
