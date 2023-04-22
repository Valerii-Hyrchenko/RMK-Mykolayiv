import styled from "styled-components";
import { missionUkr } from "../contentSettings/configs";
import { SectionWrapper } from "./cards/componentsForCards/reusedStyledComponents";
import { memo } from "react";

const Footer = ({ isNews }) => {
  return (
    <FooterContentWrapper isNews={isNews}>
      <SectionWrapper>
        {isNews ? <FooterTopBorder /> : null}
        <FooterTextFlexWrap>
          {isNews ? (
            <FooterCompany>{missionUkr.footerName}</FooterCompany>
          ) : null}

          <FooterText>{missionUkr.text}</FooterText>
        </FooterTextFlexWrap>
      </SectionWrapper>
    </FooterContentWrapper>
  );
};

export default memo(Footer);

const FooterContentWrapper = styled.div`
  border-top: 1px solid rgb(0, 118, 53);
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  width: 100%;
  position: absolute;
  bottom: 0;

  ${({ isNews }) =>
    isNews
      ? `
          text-align: right;
          background-color: rgb(0, 0, 0, 0.75);
          border-bottom: 3px solid rgb(255, 255, 255);
      `
      : null}

  ${({ isNews }) =>
    isNews &&
    `
  ${FooterTextFlexWrap} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${FooterText} {
    color: rgb(255, 255, 255);
    padding: 8px 0 10px;
    margin-right: 10px;

    @media (max-width: 480px) {
      margin-right: 5px;
      max-width: 120px;
      text-align: justify;
    }
    
  }
  `}
`;

const FooterTextFlexWrap = styled.div``;

const FooterTopBorder = styled.div`
  width: 80%;
  height: 3px;
  background-color: rgb(255, 255, 255);
  margin: 5px auto 0;
`;

const FooterCompany = styled.p`
  font-size: 1.1em;
  color: rgb(255, 255, 255);
  margin-left: 10px;

  @media (max-width: 550px) {
    margin-left: 5px;
    font-size: 1em;
    white-space: nowrap;
  }

  @media (max-width: 360px) {
    font-size: 0.9em;
  }
`;

const FooterText = styled.p`
  padding: 10px;
  color: rgb(0, 0, 0, 0.5);
  font-size: 1em;

  @media (max-width: 1200px) {
    padding: 8px 0;
    font-size: 0.9em;
  }

  @media (max-width: 550px) {
    font-size: 0.8em;
  }
`;
