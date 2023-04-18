import arrow from "../assets/icons/arrow_title.svg";
import styled from "styled-components";

export const SectionTitleWithArrows = ({ isNews, children }) => {
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: ${({ isNews }) => (isNews ? "center" : "flex-start")};
  margin: 0 0 20px 90px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ArrowsTitleContainer = styled.div`
  display: flex;
  margin-right: 5px;
`;

const ArrowImgWrapper = styled.div`
  max-width: 20px;
  margin-left: -10px;
`;

const ArrowImg = styled.img`
  width: 100%;
`;
