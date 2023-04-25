import { memo } from "react";
import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { PagesContext } from "../../context/pagesContext";
import logo from "../../assets/icons/logo.svg";

const Logo = () => {
  const { isHideHome, isPageReloaded, isCheckboxChecked } =
    useContext(PagesContext);
  const [isAbbrevAnim, setIsAbbrevAnim] = useState(false);
  const [isMissionAnim, setIsMissionAnim] = useState(false);
  const [isBgAnim, setIsBgAnim] = useState(false);
  const logoTitle = useRef(null);

  const logoAnimTimeouts = () => {
    setTimeout(() => setIsAbbrevAnim(true), 2000);
    let titleLetters = [...logoTitle.current.children];
    titleLetters.forEach((item, index) => {
      let delay = 2400 + 100 * (index + 1);
      setTimeout(() => (item.style.display = "block"), delay);
    });
    setTimeout(() => setIsMissionAnim(true), 3200);
    if (isHideHome) setTimeout(() => setIsBgAnim(true), 8500);
  };

  useEffect(() => {
    logoAnimTimeouts();
  }, []);

  useEffect(() => {
    if (isHideHome) setIsBgAnim(true);
  }, [isHideHome]);

  return (
    <LogoWrapper
      isBgAnim={isBgAnim}
      isHideHome={isHideHome}
      isPageReloaded={isPageReloaded}
      isCheckboxChecked={isCheckboxChecked}
    >
      <LogoImgWrapper>
        <LogoImg src={logo} alt="logo" />
      </LogoImgWrapper>
      <Abbreviation isAbbrevAnim={isAbbrevAnim}>PMK</Abbreviation>
      <LogoTitle ref={logoTitle}>
        <TitlePart>М</TitlePart>
        <TitlePart>И</TitlePart>
        <TitlePart>К</TitlePart>
        <TitlePart>О</TitlePart>
        <TitlePart>Л</TitlePart>
        <TitlePart>А</TitlePart>
        <TitlePart>Ї</TitlePart>
        <TitlePart>В</TitlePart>
      </LogoTitle>
      <LogoMission isMissionAnim={isMissionAnim}>
        Ефективні, безпечні та якісні рішення
      </LogoMission>
    </LogoWrapper>
  );
};

export default memo(Logo);

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: ${({ isCheckboxChecked }) => (isCheckboxChecked ? 0 : 10)};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 55%;
  width: 335px;
  padding: 10px;
  opacity: ${({ isCheckboxChecked, isHideHome }) =>
    isCheckboxChecked && isHideHome ? 0 : 1};

  @media (max-width: 1200px) {
    width: 298px;
  }

  @media (max-width: 800px) {
    width: 242px;
    padding: 5px;
  }

  @media (max-width: 550px) {
    left: 50%;
  }

  ${({ isHideHome }) =>
    isHideHome
      ? `
    position: fixed;
    top: 0;
    left: 40%;
    transform: translate(-100%, -7%) scale(0.75, 0.75);
    `
      : null}

  ${({ isBgAnim }) =>
    isBgAnim
      ? `
      border: 1px solid rgb(82, 155, 45);
      border-radius: 45px;
      background-color: rgb(240, 240, 240);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      animation-name: scrollLogoFirsTime;
      animation-duration: 2300ms;
      transition-timing-function: linier;

      @media (max-width: 1300px) {
        animation-name: showLogoReloadPage;
      }

      @media (max-width: 800px) {
        border: none;
        box-shadow: none;
        left: 55%;
      }

      @media (max-width: 480px) {
        left: 65%;
      }

      @media (max-width: 360px) {
        left: 70%;
      }
      `
      : null}

  ${({ isPageReloaded }) =>
    isPageReloaded
      ? `
        animation-name: showLogoReloadPage;
        border: none;
      `
      : null}

  @keyframes scrollLogoFirsTime {
    0% {
      top: 45%;
      left: 55%;
      transform: translate(-50%, -50%);
      border: 1px solid transparent;
      box-shadow: none;
      border-radius: 25px;
      opacity: 0;
    }

    30% {
      opacity: 1;
    }

    100% {
      top: 0;
      left: 40%;
      transform: translate(-100%, -7%) scale(0.75, 0.75);
      background-color: rgb(240, 240, 240);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      border-radius: 45px;
      border: 1px solid rgb(82, 155, 45);
      opacity: 1;
    }
  }

  @keyframes showLogoReloadPage {
    0% {
      opacity: 0;
      transform: translateX(-200%) scale(0.75, 0.75);
    }

    100% {
      opacity: 1;
      transform: translate(-100%, -7%) scale(0.75, 0.75);
    }
  }
`;

const LogoImgWrapper = styled.div`
  animation-name: showImg;
  animation-duration: 2300ms;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

  @keyframes showImg {
    0% {
      transform: translateX(-800px) rotate(-0.25turn) rotateX(900deg)
        scale(0, 0);
      opacity: 0;
    }

    60% {
      opacity: 1;
    }

    80% {
      transform: translateX(-80px) rotate(-0.25turn) rotateX(0) scale(0.8, 0.8);
    }

    100% {
      transform: translateX(0px) rotate(0turn) rotateX(0) scale(1, 1);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    width: 135px;
  }

  @media (max-width: 800px) {
    width: 110px;
  }
`;

const LogoImg = styled.img`
  width: 100%;
`;

const Abbreviation = styled.p`
  position: absolute;
  top: 53px;
  left: 30px;
  font-size: 42px;
  display: ${({ isAbbrevAnim }) => (isAbbrevAnim ? "block" : "none")};
  animation-name: showAbbreviation;
  animation-duration: 1000ms;
  transition-timing-function: linear;

  @keyframes showAbbreviation {
    0% {
      transform: rotateX(-180deg) translateY(-80px);
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      transform: rotateX(0) translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    top: 48px;
    font-size: 38px;
    left: 28px;
  }

  @media (max-width: 800px) {
    top: 35px;
    left: 19px;
    font-size: 32px;
  }
`;

const LogoTitle = styled.div`
  margin: 0 0 6px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitlePart = styled.span`
  display: none;
  font-size: 32px;
  margin-right: 1px;
  animation-name: showLetter;
  animation-duration: 1050ms;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

  @keyframes showLetter {
    0% {
      transform: translateX(70px);
      opacity: 0;
    }

    100% {
      transform: translateX(0) rotateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

const LogoMission = styled.p`
  position: absolute;
  bottom: 30px;
  right: 10px;
  font-size: 12px;
  display: ${({ isMissionAnim }) => (isMissionAnim ? "block" : "none")};
  animation-name: showMission;
  animation-duration: 900ms;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

  @keyframes showMission {
    0% {
      transform: rotateX(-180deg) translateY(120px);
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      transform: rotateX(0) translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    bottom: 30px;
    font-size: 10px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
