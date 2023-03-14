import { assemblyDetailsUkr } from "../contentSettings/configs";
import { BusinessLineDetailsWrap } from "./reusedStyledComponents";
import { BusinessLineDetailsTitle } from "./reusedStyledComponents";
import { BusinessLineDetailsList } from "./reusedStyledComponents";
import { BusinessLineDetailsItem } from "./reusedStyledComponents";
import { BackToBusinessLineBtn } from "./BackToBusinessLineBtn";

export const AssemblyInfo = () => {
  return (
    <BusinessLineDetailsWrap>
      <BackToBusinessLineBtn />
      <BusinessLineDetailsTitle>
        {assemblyDetailsUkr.title}
      </BusinessLineDetailsTitle>
      <BusinessLineDetailsList>
        {assemblyDetailsUkr.info.map(({ id, text }) => (
          <BusinessLineDetailsItem key={id}>{text}</BusinessLineDetailsItem>
        ))}
      </BusinessLineDetailsList>
    </BusinessLineDetailsWrap>
  );
};
