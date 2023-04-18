import { projectsDetailsUkr } from "../../contentSettings/configs";
import {
  DetailsWrap,
  BusinessLineDetailsTitle,
  BusinessLineDetailsList,
  BusinessLineDetailsItem,
} from "../cards/componentsForCards/reusedStyledComponents";
import { BackToBusinessLineBtn } from "./BackToBusinessLineBtn";

export const ProjectsInfo = () => {
  return (
    <DetailsWrap isBusinessLineProjects={true}>
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
    </DetailsWrap>
  );
};
