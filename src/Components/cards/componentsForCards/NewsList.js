import styled from "styled-components";
import { newsUkr } from "../../../contentSettings/configs";
import { memo } from "react";

const NewsList = () => {
  return (
    <NewsGridWrapper>
      {newsUkr.map(({ id, title }) => (
        <NewsItemWrapper key={id}>
          <NewsItem>{title}</NewsItem>
        </NewsItemWrapper>
      ))}
    </NewsGridWrapper>
  );
};

export default memo(NewsList);

const NewsGridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 80px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0 30px;

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

  @media (max-width: 550px) {
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(1, 1fr);
    max-width: 300px;
  }

  @media (max-width: 360px) {
    max-width: 290px;
  }
`;

const NewsItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-10px) scale(1.05, 1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 1200px) {
    height: 130px;
  }

  @media (max-width: 1090px) {
    height: 110px;
  }

  @media (max-width: 800px) {
    height: 80px;
  }
`;

const NewsItem = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1em;
  font-weight: 700;
  color: rgb(82, 155, 45);

  @media (max-width: 1090px) {
    font-size: 0.9em;
  }

  @media (max-width: 800px) {
    text-align: center;
  }
`;
