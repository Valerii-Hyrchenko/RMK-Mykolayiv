import styled from "styled-components";
import { memo } from "react";
import { articlesNewsUkr } from "../contentSettings/configs";
import { useContext } from "react";
import { PagesContext } from "../context/pagesContext";
import arrowBack from "../assets/icons/arrow_back.svg";

const NewsList = () => {
  const { selectedArticle, setSelectedArticle } = useContext(PagesContext);

  return (
    <NewsFlexWrapper>
      {!selectedArticle ? (
        articlesNewsUkr.map((article) => {
          return (
            <NewsItemWrapper
              key={article.id}
              onClick={() => setSelectedArticle(article)}
            >
              <NewsTitle>{article.attributes.title}</NewsTitle>
              <ReadMoreText>{article.attributes.readMore}</ReadMoreText>
            </NewsItemWrapper>
          );
        })
      ) : (
        <ArticleFlexWrap>
          <ArticleImgWrap>
            <ArticleImg
              src={selectedArticle.attributes.img}
              alt="article_img"
            />
          </ArticleImgWrap>
          <ContentWrap>
            <GoBackBtnWrap onClick={() => setSelectedArticle(null)}>
              <GoBackBtn src={arrowBack} alt="arrow_back" />
            </GoBackBtnWrap>
            <NewsTitle isArticle={true}>
              {selectedArticle.attributes.title}
            </NewsTitle>
            {selectedArticle.attributes.article.map((item) => (
              <ArticleParagraph key={item.id}>
                {item.paragraph}
              </ArticleParagraph>
            ))}
          </ContentWrap>
        </ArticleFlexWrap>
      )}
    </NewsFlexWrapper>
  );
};

export default memo(NewsList);

const NewsFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0 30px;
  justify-content: space-around;

  @media (max-width: 1200px) {
    max-width: 900px;
  }

  @media (max-width: 1090px) {
    max-width: 700px;
    gap: 60px;
    padding: 25px 0 20px;
  }

  @media (max-width: 800px) {
    max-width: 450px;
    gap: 30px;
    padding: 20px 0 0;
  }

  @media (max-width: 360px) {
    max-width: 290px;
  }
`;

const NewsItemWrapper = styled.div`
  position: relative;
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.4s ease-in-out;
  padding: 30px 30px 0;
  max-width: 37%;
  animation-name: showPage;
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @media (max-width: 1090px) {
    max-width: 43%;
  }

  @media (max-width: 800px) {
    max-width: 70%;
  }

  @media (max-width: 550px) {
    max-width: 100%;
  }

  &:hover {
    transform: translateY(-8px) scale(1.03, 1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease-in-out;
  }
`;

const NewsTitle = styled.p`
  font-size: 1.1em;
  font-weight: 700;
  color: rgb(82, 155, 45);
  text-align: center;
  ${({ isArticle }) =>
    isArticle
      ? `
    margin-bottom: 15px;
    font-size: 1.2em;

    @media (max-width: 1090px) {
      font-size: 1.1em;
    }
    `
      : ""};

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const ReadMoreText = styled.p`
  color: rgb(82, 155, 45);
  font-style: italic;
  text-align: right;
  padding: 10px 10px 15px;
  transition: 350ms all linear;
  animation-duration: 550ms;
  animation-timing-function: ease-in-out;
  max-width: 110px;
  margin: 0 0 0 auto;

  &:hover {
    transition: 350ms all linear;
    animation-name: showReadMore;
    text-decoration: underline;
  }

  @keyframes showReadMore {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ArticleFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation-name: showPage;
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;
  column-gap: 50px;

  @media (max-width: 1090px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 50px;
  }
`;

const ContentWrap = styled.div`
  padding: 0 35px 30px;
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  max-width: 52%;

  @media (max-width: 1090px) {
    max-width: 70%;
  }

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const ArticleImgWrap = styled.div`
  max-width: 350px;
  border-radius: 15px;
`;

const ArticleImg = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const GoBackBtnWrap = styled.div`
  margin: 5px 0 0 -20px;
  width: 40px;
  cursor: pointer;
`;

const GoBackBtn = styled.img`
  width: 100%;
`;

const ArticleParagraph = styled.p`
  text-indent: 30px;
  line-height: 1.6em;
`;
