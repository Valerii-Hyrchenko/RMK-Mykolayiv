import { assemblyDetailsUkr } from "../../contentSettings/configs";
import {
  DetailsWrap,
  BusinessLineDetailsTitle,
  BusinessLineDetailsList,
  BusinessLineDetailsItem,
} from "../cards/componentsForCards/reusedStyledComponents";
import { BackToBusinessLineBtn } from "./BackToBusinessLineBtn";

export const AssemblyInfo = () => {
  return (
    <DetailsWrap>
      <BackToBusinessLineBtn />
      <BusinessLineDetailsTitle>
        {assemblyDetailsUkr.title}
      </BusinessLineDetailsTitle>
      <BusinessLineDetailsList>
        {assemblyDetailsUkr.info.map(({ id, text }) => (
          <BusinessLineDetailsItem key={id}>{text}</BusinessLineDetailsItem>
        ))}
      </BusinessLineDetailsList>
    </DetailsWrap>
  );
};
