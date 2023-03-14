import styled from "styled-components";
import { aboutCompanyUkr } from "../contentSettings/configs";

export const CompanyDescription = () => {
  return (
    <DescriptionContainer>
      {aboutCompanyUkr.map(({ id, preText, text }) => (
        <Text key={id}>
          {preText ? <GreenText>{preText}</GreenText> : null}
          {text}
        </Text>
      ))}
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  max-width: 980px;
  margin: 50px auto 0;
  background-color: rgb(255, 255, 255);
  padding: 30px;
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  animation-name: showPage;
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes showPage {
    0% {
      opacity: 0;
      transform: translateX(-800px) scale(0.5, 0.5);
    }

    50% {
      transform: scale(0.7, 0.7);
    }

    100% {
      transform: scale(1, 1);
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1090px) {
    padding: 20px;
    margin: 40px 5px 0;
  }
`;

const GreenText = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: rgb(0, 118, 53);
  margin-right: 10px;

  @media (max-width: 1200px) {
    font-size: 1.4em;
  }

  @media (max-width: 1090px) {
    font-size: 1.3em;
  }
`;

const Text = styled.p`
  text-align: justify;
  font-size: 1.2em;
  line-height: 1.4em;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    line-height: 1.35em;
    margin-bottom: 15px;
    font-size: 1.15em;
  }

  @media (max-width: 1090px) {
    line-height: 1.25em;
    margin-bottom: 10px;
    font-size: 1.05em;
  }
`;
