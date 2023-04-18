import {
  DetailsWrap,
  BusinessLineDetailsTitle,
  BusinessLineDetailsList,
  BusinessLineDetailsItem,
} from "../cards/componentsForCards/reusedStyledComponents";
import { distributionDetailsUkr } from "../../contentSettings/configs";
import { BackToBusinessLineBtn } from "./BackToBusinessLineBtn";
import styled from "styled-components";
import distributionImg from "../../assets/img/distribution_img.webp";

export const DistributionInfo = () => {
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
      <ImgWrap>
        <Img src={distributionImg} alt="distribution_info_img" />
      </ImgWrap>
    </DistributionInfoWrap>
  );
};

const DistributionInfoWrap = styled.div``;

const ImgWrap = styled.div`
  width: 500px;
  margin: 30px auto 0;
  padding-left: 100px;
  border-radius: 15px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 25px;
`;
