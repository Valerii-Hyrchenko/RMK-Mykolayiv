import NewsList from "../Components/NewsList";
import Footer from "../Components/Footer";
import { sectionsTitles } from "../contentSettings/configs";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import { useContext, memo } from "react";
import { PagesContext } from "../context/pagesContext";
import SectionTitleWithArrows from "../Components/SectionTitleWithArrows";
import styled from "styled-components";

const News = () => {
  const { newsRef, setSelectedArticle } = useContext(PagesContext);
  return (
    <NewsWrapper ref={newsRef}>
      <SectionWrapper>
        <WrapperForOnClickEvent onClick={() => setSelectedArticle(null)}>
          <SectionTitleWithArrows isNews={true}>
            {sectionsTitles.news.text}
          </SectionTitleWithArrows>
        </WrapperForOnClickEvent>
        <NewsList />
      </SectionWrapper>
      <Footer isNews={true} />
    </NewsWrapper>
  );
};

export default memo(News);

const NewsWrapper = styled.div`
  padding: 120px 0;
  scroll-margin-top: 100px;
  position: relative;

  @media (max-width: 1090px) {
    scroll-margin-top: 70px;
  }

  @media (max-width: 550px) {
    padding: 90px 0;
  }
`;

const WrapperForOnClickEvent = styled.div`
  cursor: pointer;
`;
