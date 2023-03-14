import { useContext } from "react";
import styled from "styled-components";
import { missionUkr } from "../contentSettings/configs";
import { headerUkr } from "../contentSettings/configs";
import { PagesContext } from "../context/pagesContext";

export const Footer = () => {
  const { currentPage } = useContext(PagesContext);
  return (
    <FooterContentWrapper currentPage={currentPage}>
      <FooterText>{missionUkr.text}</FooterText>
    </FooterContentWrapper>
  );
};

const FooterContentWrapper = styled.footer`
  width: 100%;
  text-align: center;
  padding-bottom: 20px;

  ${({ currentPage }) =>
    currentPage.text !== headerUkr[3].text
      ? `
    position: absolute;
    bottom: 0;
    left: 0;
  `
      : null}

  @media (max-width: 800px) {
    position: relative;
    margin-top: 30px;
  }
`;

const FooterText = styled.p`
  padding: 15px 0;
  border-radius: 10px;
  font-size: 1.2em;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(82, 155, 45, 0.3);

  @media (max-width: 1200px) {
    padding: 10px 0;
    font-size: 1.1em;
  }

  @media (max-width: 360px) {
    max-width: 320px;
    font-size: 1em;
  }
`;
