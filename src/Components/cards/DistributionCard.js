import { useContext, memo } from "react";
import { businessLineUkr } from "../../contentSettings/configs";
import {
  ItemContainer,
  ImgWrapper,
  Img,
  Title,
  CardWrapper,
  BackgroundBlock,
} from "../cards/componentsForCards/reusedStyledComponents";
import { PagesContext } from "../../context/pagesContext";

const DistributionCard = () => {
  const { img, title } = businessLineUkr[2];
  const { chooseBusinessDetails } = useContext(PagesContext);
  return (
    <CardWrapper>
      <ItemContainer onClick={() => chooseBusinessDetails(businessLineUkr[2])}>
        <ImgWrapper>
          <Img src={img} alt="distribution_img" />
        </ImgWrapper>
        <Title>{title}</Title>
      </ItemContainer>
      <BackgroundBlock isTransparent={true} />
    </CardWrapper>
  );
};

export default memo(DistributionCard);
