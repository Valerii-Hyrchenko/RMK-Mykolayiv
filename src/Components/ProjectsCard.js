import { businessLineUkr } from "../contentSettings/configs";
import { ItemContainer } from "./reusedStyledComponents";
import { ImgWrapper } from "./reusedStyledComponents";
import { Img } from "./reusedStyledComponents";
import { Title } from "./reusedStyledComponents";

export const ProjectsCard = () => {
  const { img, title } = businessLineUkr[1];

  return (
    <ItemContainer>
      <ImgWrapper>
        <Img src={img} alt="business_line_img" />
      </ImgWrapper>
      <Title>{title}</Title>
    </ItemContainer>
  );
};
