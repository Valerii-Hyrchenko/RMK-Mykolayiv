import { useContext, memo } from "react";
import { businessLineUkr } from "../../contentSettings/configs";
import {
  ItemContainer,
  ImgWrapper,
  Img,
  Title,
  CardWrapper,
} from "../cards/componentsForCards/reusedStyledComponents";
import { PagesContext } from "../../context/pagesContext";

const ProjectsCard = () => {
  const { img, title } = businessLineUkr[1];
  const { chooseBusinessDetails } = useContext(PagesContext);
  return (
    <CardWrapper>
      <ItemContainer onClick={() => chooseBusinessDetails(businessLineUkr[1])}>
        <ImgWrapper>
          <Img src={img} alt="business_line_img" />
        </ImgWrapper>
        <Title>{title}</Title>
      </ItemContainer>
    </CardWrapper>
  );
};

export default memo(ProjectsCard);
