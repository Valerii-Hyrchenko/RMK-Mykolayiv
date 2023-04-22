import { useContext, memo } from "react";
import CompanyDescription from "../Components/cards/componentsForCards/CompanyDescription";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import SectionTitleHeadline from "../Components/SectionTitleHeadline";
import { sectionsTitles } from "../contentSettings/configs";
import { PagesContext } from "../context/pagesContext";
import styled from "styled-components";

const AboutCompany = () => {
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

export default memo(AboutCompany);

const AboutCompanyWrapper = styled.div`
  scroll-margin-top: 100px;
  padding-top: 70px;

  @media (max-width: 1090px) {
    scroll-margin-top: 70px;
  }

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;
