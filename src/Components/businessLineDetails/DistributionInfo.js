import {
  DetailsWrap,
  BusinessLineDetailsTitle,
  BusinessLineDetailsList,
  BusinessLineDetailsItem,
} from "../cards/componentsForCards/reusedStyledComponents";
import { distributionDetailsUkr } from "../../contentSettings/configs";
import BackToBusinessLineBtn from "./BackToBusinessLineBtn";
import styled from "styled-components";
import distributionImg1 from "../../assets/img/distribution_img_1.webp";
import distributionImg2 from "../../assets/img/distribution_img_2.webp";
import distributionImg3 from "../../assets/img/distribution_img_3.webp";
import { memo } from "react";

const DistributionInfo = () => {
  return (
    <DistributionInfoWrap>
      <DetailsWrap>
        <BackToBusinessLineBtn />
        <BusinessLineDetailsTitle>
          {distributionDetailsUkr.title}
        </BusinessLineDetailsTitle>
        <BusinessLineDetailsList>
          {distributionDetailsUkr.info.map(({ id, text }) => (
            <BusinessLineDetailsItem key={id}>{text}</BusinessLineDetailsItem>
          ))}
        </BusinessLineDetailsList>
      </DetailsWrap>
      <ImgFlexContainer>
        <ImgWrap>
          <Img src={distributionImg1} alt="distribution_info_img1" />
        </ImgWrap>
        <ImgWrap>
          <Img src={distributionImg2} alt="distribution_info_img2" />
        </ImgWrap>
        <ImgWrap>
          <Img src={distributionImg3} alt="distribution_info_img2" />
        </ImgWrap>
      </ImgFlexContainer>
    </DistributionInfoWrap>
  );
};

export default memo(DistributionInfo);

const DistributionInfoWrap = styled.div``;

const ImgFlexContainer = styled.div`
  display: flex;
  margin: 30px auto 0;
  border-radius: 15px;
  justify-content: center;
  padding-left: 100px;

  @media (max-width: 1090px) {
    padding-left: 20px;
    margin: 15px auto 0;
  }

  @media (max-width: 800px) {
    padding-left: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgWrap = styled.div`
  width: 175px;
  line-height: 0;

  &:first-of-type > img {
    border-radius: 8% 0% 0% 8%;

    @media (max-width: 480px) {
      border-radius: 8% 8% 0% 0%;
    }
  }

  &:last-of-type > img {
    border-radius: 0% 8% 8% 0%;

    @media (max-width: 480px) {
      border-radius: 0% 0% 8% 8%;
    }
  }

  @media (max-width: 1090px) {
    width: 160px;
  }

  @media (max-width: 550px) {
    width: 148px;
  }

  @media (max-width: 480px) {
    width: 175px;
  }

  @media (max-width: 360px) {
    width: 165px;
  }
`;

const Img = styled.img`
  width: 100%;
`;
