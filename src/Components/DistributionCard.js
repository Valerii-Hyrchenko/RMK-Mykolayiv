import { businessLineUkr } from "../contentSettings/configs";
import { ItemContainer } from "./reusedStyledComponents";
import { ImgWrapper } from "./reusedStyledComponents";
import { Img } from "./reusedStyledComponents";
import { Title } from "./reusedStyledComponents";

export const DistributionCard = () => {
  const { img, title } = businessLineUkr[2];

  return (
    <ItemContainer>
      <ImgWrapper>
        <Img src={img} alt="distribution_img" />
      </ImgWrapper>
      <Title>{title}</Title>
    </ItemContainer>
  );
};
