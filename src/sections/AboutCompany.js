import { useContext } from "react";
import { CompanyDescription } from "../Components/cards/componentsForCards/CompanyDescription";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import { SectionTitleHeadline } from "../Components/SectionTitleHeadline";
import { sectionsTitles } from "../contentSettings/configs";
import { PagesContext } from "../context/pagesContext";
import styled from "styled-components";

export const AboutCompany = () => {
  const { aboutCompanyRef } = useContext(PagesContext);
  return (
    <AboutCompanyWrapper ref={aboutCompanyRef}>
      <SectionTitleHeadline>
        {sectionsTitles.aboutCompany.text}
      </SectionTitleHeadline>
      <SectionWrapper>
        <CompanyDescription />
      </SectionWrapper>
    </AboutCompanyWrapper>
  );
};

const AboutCompanyWrapper = styled.div`
  scroll-margin-top: 100px;
  padding-top: 32px;
`;
