import styled from "styled-components";

export const SectionTitleHeadline = ({ children }) => {
  return (
    <TitleWrapper>
      <Title>{children}</Title>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  padding-top: 85px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    height: 2px;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.7);
  }

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: rgb(0, 0, 0, 0.7);
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.7);
  width: 160px;
  margin: 0 30px;
  white-space: nowrap;
`;
