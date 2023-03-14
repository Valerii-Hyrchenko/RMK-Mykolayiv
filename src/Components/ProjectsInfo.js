import { projectsDetailsUkr } from "../contentSettings/configs";
import { BusinessLineDetailsWrap } from "./reusedStyledComponents";
import { BusinessLineDetailsTitle } from "./reusedStyledComponents";
import { BusinessLineDetailsList } from "./reusedStyledComponents";
import { BusinessLineDetailsItem } from "./reusedStyledComponents";
import { BackToBusinessLineBtn } from "./BackToBusinessLineBtn";

export const ProjectsInfo = () => {
  return (
    <BusinessLineDetailsWrap isBusinessLineProjects={true}>
      <BackToBusinessLineBtn />
      {projectsDetailsUkr.map(({ id, title, info }) => (
        <div key={id}>
          <BusinessLineDetailsTitle>{title}</BusinessLineDetailsTitle>
          <BusinessLineDetailsList>
            {info.map(({ id, text }) => (
              <BusinessLineDetailsItem key={id}>{text}</BusinessLineDetailsItem>
            ))}
          </BusinessLineDetailsList>
        </div>
      ))}
    </BusinessLineDetailsWrap>
  );
};
