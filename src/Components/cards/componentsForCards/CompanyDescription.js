import { memo } from "react";
import styled from "styled-components";
import { aboutCompanyUkr } from "../../../contentSettings/configs";

const CompanyDescription = () => {
  return (
    <DescriptionFlexContainer>
      {aboutCompanyUkr.map(({ id, preText, text, img }) => (
        <ContentWrapper key={id}>
          <GreenText>{preText}</GreenText>
          <Text>{text}</Text>
          <ImgWrapper firstElement={id === aboutCompanyUkr[0].id}>
            <Img src={img} alt="about_company_img" />
          </ImgWrapper>
        </ContentWrapper>
      ))}
    </DescriptionFlexContainer>
  );
};

export default memo(CompanyDescription);

const DescriptionFlexContainer = styled.div`
  max-width: 980px;
  margin: 30px auto 60px;
  background-color: rgb(255, 255, 255);
  padding: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1090px) {
    padding: 20px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    margin: 30px auto;
  }
`;

const ContentWrapper = styled.div`
  max-width: 350px;
`;

const GreenText = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  color: rgb(0, 118, 53);
  margin-right: 10px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 1.4em;
  }

  @media (max-width: 1090px) {
    font-size: 1.3em;
  }
`;

const Text = styled.p`
  text-align: justify;
  line-height: 1.8em;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    margin-bottom: 15px;
    font-size: 1.15em;
  }

  @media (max-width: 1090px) {
    margin-bottom: 10px;
    font-size: 1.05em;
  }
`;

const ImgWrapper = styled.div`
  max-width: 200px;
  margin: ${({ firstElement }) => (firstElement ? "55px auto 0" : "0 auto")};
`;

const Img = styled.img`
  width: 100%;
`;
