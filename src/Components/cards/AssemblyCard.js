import { memo, useContext } from "react";
import { businessLineUkr } from "../../contentSettings/configs";
import {
  ItemContainer,
  ImgWrapper,
  Img,
  Title,
  BackgroundBlock,
  CardWrapper,
} from "../cards/componentsForCards/reusedStyledComponents";
import { PagesContext } from "../../context/pagesContext";

const AssemblyCard = () => {
  const { img, title } = businessLineUkr[0];
  const { chooseBusinessDetails } = useContext(PagesContext);
  return (
    <CardWrapper>
      <ItemContainer onClick={() => chooseBusinessDetails(businessLineUkr[0])}>
        <ImgWrapper>
          <Img src={img} alt="business_line_img" />
        </ImgWrapper>
        <Title>{title}</Title>
      </ItemContainer>
      <BackgroundBlock isTransparent={false} />
    </CardWrapper>
  );
};

export default memo(AssemblyCard);
