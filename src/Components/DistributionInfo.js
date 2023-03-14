import { BusinessLineDetailsWrap } from "./reusedStyledComponents";
import { BusinessLineDetailsTitle } from "./reusedStyledComponents";
import { BusinessLineDetailsList } from "./reusedStyledComponents";
import { BusinessLineDetailsItem } from "./reusedStyledComponents";
import { distributionDetailsUkr } from "../contentSettings/configs";
import { BackToBusinessLineBtn } from "./BackToBusinessLineBtn";

export const DistributionInfo = () => {
  return (
    <BusinessLineDetailsWrap>
      <BackToBusinessLineBtn />
      <BusinessLineDetailsTitle>
        {distributionDetailsUkr.title}
      </BusinessLineDetailsTitle>
      <BusinessLineDetailsList>
        {distributionDetailsUkr.info.map(({ id, text }) => (
          <BusinessLineDetailsItem key={id}>{text}</BusinessLineDetailsItem>
        ))}
      </BusinessLineDetailsList>
    </BusinessLineDetailsWrap>
  );
};
