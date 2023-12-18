import { memo } from "react";
import arrow from "../assets/icons/arrow_title.svg";
import styled from "styled-components";

const SectionTitleWithArrows = ({ isNews, children }) => {
  return (
    <TitleWrapper isNews={isNews}>
      <ArrowsTitleContainer>
        {[...new Array(3)].map((item, index) => {
          let id = Math.floor(Math.random() * 10000) * (index + 1);
          return (
            <ArrowImgWrapper key={id}>
              <ArrowImg src={arrow} alt="arrow_img" />
            </ArrowImgWrapper>
          );
        })}
      </ArrowsTitleContainer>
      <Title>{children}</Title>
    </TitleWrapper>
  );
};

export default memo(SectionTitleWithArrows);

const TitleWrapper = styled.div`
  display: flex;
  margin: 0 0 20px 90px;
  align-items: center;

  ${({ isNews }) =>
    isNews
      ? `
        justify-content: center;

        @media (max-width: 1090px) {
          justify-content: flex-start;
        }
      `
      : ""}

  @media (max-width: 800px) {
    margin: 0 0 20px 30px;
  }

  @media (max-width: 480px) {
    margin: 0 0 20px 15px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 360px) {
    font-size: 19px;
    letter-spacing: 0;
  }
`;

const ArrowsTitleContainer = styled.div`
  display: flex;
  margin-right: 5px;

  @media (max-width: 360px) {
    margin-right: 3px;
  }
`;

const ArrowImgWrapper = styled.div`
  max-width: 20px;
  margin-left: -10px;
`;

const ArrowImg = styled.img`
  width: 100%;
`;
