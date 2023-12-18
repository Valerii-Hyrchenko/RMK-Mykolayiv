import { memo } from "react";
import styled from "styled-components";
import { aboutCompanyUkr } from "../contentSettings/configs";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import { DetailsWrap } from "../Components/cards/componentsForCards/reusedStyledComponents";
import photoImg from "../assets/img/manager.webp";

const Mission = () => {
  const { fullDescription1, fullDescription2, name, position } =
    aboutCompanyUkr[0];
  let preText = fullDescription1.slice(0, 9);
  let text = fullDescription1.slice(9);

  return (
    <MissionBackground>
      <SectionWrapper>
        <MissionFlexWrapper>
          <PhotoWrapper>
            <ImgWrapper>
              <Img src={photoImg} alt="photo_img" />
            </ImgWrapper>
            <BorderBlockBg />
          </PhotoWrapper>
          <DetailsWrap isMissionSect={true}>
            <MissionText>
              <MissionPretext>"{preText}</MissionPretext>
              {text}
            </MissionText>
            <MissionText>{fullDescription2}"</MissionText>
            <MissionText>
              <NameDirector>{name}</NameDirector>
              {position}
            </MissionText>
          </DetailsWrap>
        </MissionFlexWrapper>
      </SectionWrapper>
    </MissionBackground>
  );
};

export default memo(Mission);

const MissionBackground = styled.div`
  background-color: rgb(82, 155, 45, 0.9);
  padding: 110px 0;
  margin: 80px 0 40px;

  @media (max-width: 800px) {
    padding: 60px 0 110px;
  }
`;

const MissionFlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PhotoWrapper = styled.div`
  margin-top: 50px;
  position: relative;
`;

const BorderBlockBg = styled.div`
  height: 120px;
  width: 150px;
  border: 4px solid rgb(255, 255, 255);
  position: absolute;
  bottom: 20px;
  left: -30px;
  border-radius: 25px;

  @media (max-width: 380px) {
    left: -12px;
  }
`;

const ImgWrapper = styled.div`
  border-radius: 35px;
  line-height: 0;
  position: relative;
  z-index: 5;

  @media (max-width: 1200px) {
    max-width: 300px;
  }

  @media (max-width: 1090px) {
    margin-bottom: 70px;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }

  @media (max-width: 360px) {
    max-width: 260px;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 35px;
  border: 4px solid rgb(0, 118, 53);
  padding: 30px;

  @media (max-width: 550px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const MissionPretext = styled.span`
  font-size: 1.4em;
  color: rgb(0, 118, 53);
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const MissionText = styled.p`
  font-size: 1.2em;
  line-height: 1.4em;
  text-align: justify;
  margin-bottom: 10px;

  &:last-of-type {
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
    line-height: 1.2em;
  }
`;

const NameDirector = styled.span`
  font-size: 1.1em;
  line-height: 1.2em;
  font-weight: 700;
  margin-right: 10px;
`;
