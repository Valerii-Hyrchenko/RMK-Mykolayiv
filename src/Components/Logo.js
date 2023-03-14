import { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import { PagesContext } from "../context/pagesContext";

export const Logo = () => {
  const { currentPage } = useContext(PagesContext);

  return (
    <LogoWrapper currentPage={currentPage}>
      <LogoImg src={logo} alt="logo" />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  position: relative;
  z-index: 5;
  ${({ currentPage }) =>
    !currentPage.id
      ? `
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      `
      : `
      margin: -50px 0 0 20px;

      @media (max-width: 1090px) {
        margin: 0 0 0 20px;
        padding: 20px 0 0 0;
      }
      `}

  ${({ currentPage }) =>
    currentPage.id &&
    `
      ${LogoImg} {
        width: 280px;

        @media (max-width: 1090px) {
          width: 200px;
        }
      }
    `}

  @media (max-width: 1200px) {
    width: 290px;
  }

  @media (max-width: 1090px) {
    width: 260px;
  }

  @media (max-width: 800px) {
    width: 240px;
  }

  @media (max-width: 550px) {
    width: 210px;
  }
`;

const LogoImg = styled.img`
  width: 100%;
`;
