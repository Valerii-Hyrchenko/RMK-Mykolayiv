import { PagesContext } from "../context/pagesContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";
import { linkStyle } from "./reusedStyledComponents";

import { headerUkr } from "../contentSettings/configs";

export const Header = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isMenuHide, setIsMenuHide] = useState(false);
  const { currentPage, choosePage } = useContext(PagesContext);
  const pageInStorage = JSON.parse(sessionStorage.getItem("page"));

  useEffect(() => {
    if (pageInStorage) choosePage(pageInStorage);
  }, []);

  const handleMenuChanger = () => {
    if (!isCheckboxChecked) {
      setIsCheckboxChecked(true);
      setIsMenuHide(false);
    } else {
      setIsMenuHide(true);
      setTimeout(() => {
        setIsCheckboxChecked(false);
      }, 750);
    }
  };

  return (
    <>
      <HeaderBurgerMenu
        isCheckboxChecked={isCheckboxChecked}
        handleMenuChanger={handleMenuChanger}
      />
      {isCheckboxChecked ? (
        <OutsideSpace onClick={handleMenuChanger} isMenuHide={isMenuHide} />
      ) : null}
      <HeaderContainer
        isCheckboxChecked={isCheckboxChecked}
        isMenuHide={isMenuHide}
      >
        <Navigation>
          <List>
            {headerUkr.map((item) => (
              <Link style={linkStyle} key={item.id} to={item.routWay}>
                <ListItem
                  active={
                    (pageInStorage && pageInStorage.text === item.text) ||
                    (currentPage && currentPage.text === item.text)
                  }
                  onClick={() => {
                    choosePage(item);
                    sessionStorage.setItem("page", JSON.stringify(item));
                    if (isCheckboxChecked) handleMenuChanger();
                  }}
                >
                  {item.text}
                </ListItem>
              </Link>
            ))}
          </List>
        </Navigation>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  padding-top: 30px;
  max-width: 664px;
  margin: 0 20px 0 auto;
  animation-name: ${({ isMenuHide }) =>
    isMenuHide ? "hideHeader" : "showHeader"};
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes showHeader {
    0% {
      transform: perspective(1000px) rotateX(180deg) scale(0, 0)
        translateY(-300px);
      opacity: 0;
    }

    100% {
      transform: perspective(1000px) rotateX(0) scale(1, 1) translateY(0);
      opacity: 1;
    }
  }

  @keyframes hideHeader {
    0% {
      transform: perspective(1000px) rotateX(0) scale(1, 1) translateY(0);
      opacity: 1;
    }

    100% {
      transform: perspective(1000px) rotateX(180deg) scale(0, 0)
        translateY(-300px);
      opacity: 0;
    }
  }

  @media (max-width: 1090px) {
    padding: 20px 0 0 0;
    margin: 0 30px 0 auto;
    position: fixed;
    top: 0;
    right: 0;
    max-width: 228px;
    display: ${({ isCheckboxChecked }) =>
      isCheckboxChecked ? "block" : "none"};
  }
`;

const OutsideSpace = styled.div`
  @media (max-width: 1090px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 100%;
    left: 0;
    z-index: 10;
    height: 100%;
    backdrop-filter: blur(8px);
    animation-name: ${({ isMenuHide }) =>
      isMenuHide ? "blurBgOff" : "blurBgOn"};
    animation-duration: 800ms;
    transition-timing-function: linear;

    @keyframes blurBgOn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes blurBgOff {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }
`;

const Navigation = styled.nav``;

const List = styled.ul`
  box-sizing: border-box;
  display: flex;
  background-color: rgb(255, 255, 255);
  border: 3px solid rgb(0, 118, 53);
  border-radius: 10px;
  box-shadow: rgb(82, 155, 45, 0.9) 0px 1px 2px 0px,
    rgb(82, 155, 45, 0.5) 0px 2px 6px 2px;

  & > a:last-child > li {
    padding: 10px 40px;

    @media (max-width: 1090px) {
      padding: 8px 15px;
    }
  }

  @media (max-width: 1090px) {
    padding: 40px 5px 10px;
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  white-space: nowrap;
  color: rgb(82, 155, 45);
  border-radius: 6px;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 300ms linear;
  background-color: rgb(255, 255, 255);

  ${({ active }) =>
    active
      ? `
        color: rgb(255, 255, 255);
        background-color:rgb(0, 118, 53);
      `
      : null};

  &:hover {
    background-color: rgb(82, 155, 45);
    color: rgb(255, 255, 255);
    transition: all 300ms linear;
  }

  @media (max-width: 1090px) {
    padding: 8px 15px;
  }
`;
