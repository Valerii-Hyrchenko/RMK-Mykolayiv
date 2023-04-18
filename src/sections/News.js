import { NewsList } from "../Components/cards/componentsForCards/NewsList";
import { Footer } from "../Components/Footer";
import { sectionsTitles } from "../contentSettings/configs";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import { useContext } from "react";
import { PagesContext } from "../context/pagesContext";
import { SectionTitleWithArrows } from "../Components/SectionTitleWithArrows";
import styled from "styled-components";

export const News = () => {
  const { newsRef } = useContext(PagesContext);
  return (
    <NewsWrapper ref={newsRef}>
      <SectionWrapper>
        <SectionTitleWithArrows isNews={true}>
          {sectionsTitles.news.text}
        </SectionTitleWithArrows>
        <NewsList />
      </SectionWrapper>
      <Footer isNews={true} />
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  padding: 120px 0;
  scroll-margin-top: 100px;
  position: relative;
`;
