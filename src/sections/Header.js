import { memo } from "react";
import Navigation from "../Components/forHeader/Navigation";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import styled from "styled-components";
import { useContext } from "react";
import { PagesContext } from "../context/pagesContext";

const Header = () => {
  const { isHideHome } = useContext(PagesContext);
  return (
    <>
      <HeaderContainer isHideHome={isHideHome}>
        <SectionWrapper>
          <ComponentWrap>
            <Navigation />
          </ComponentWrap>
        </SectionWrapper>
      </HeaderContainer>
      <TopBorder />
    </>
  );
};

export default memo(Header);

const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  ${({ isHideHome }) =>
    isHideHome
      ? `
        position: fixed;
        top:0;
        height: 100px;
        width: 100%;
        background-color: rgb(240, 240, 240);

        @media (max-width: 1090px) {
          height: 70px;
        }

        @media (max-width: 800px) {
          height: 90px;
        }
      `
      : null}
`;

const ComponentWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const TopBorder = styled.hr`
  margin: -1px 0 0 0;
`;
