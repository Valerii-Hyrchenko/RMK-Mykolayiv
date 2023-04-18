import { PagesContext } from "../../context/pagesContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";
import { headerUkr } from "../../contentSettings/configs";

export const Navigation = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isMenuHide, setIsMenuHide] = useState(false);
  const {
    homeRef,
    businessLineRef,
    aboutCompanyRef,
    contactsRef,
    newsRef,
    isHideHome,
    setIsClickOnNavMenu,
  } = useContext(PagesContext);
  const sectionsRefs = [businessLineRef, aboutCompanyRef, contactsRef, newsRef];

  const burgerMenuChanger = () => {
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

  const handleMenuClicker = ({ index }) => {
    if (isCheckboxChecked) burgerMenuChanger();
    const firstScroll = () => {
      let homeHeight = homeRef.current.clientHeight;
      let top = Math.floor(
        sectionsRefs[index].current.getBoundingClientRect().top
      );
      window.scrollTo({ top: top - homeHeight, behavior: "smooth" });
    };
    const secondScroll = () => {
      sectionsRefs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    isHideHome ? secondScroll() : firstScroll();
  };

  return (
    <>
      <HeaderBurgerMenu
        isCheckboxChecked={isCheckboxChecked}
        handleMenuChanger={burgerMenuChanger}
      />
      {isCheckboxChecked ? (
        <OutsideSpace onClick={burgerMenuChanger} isMenuHide={isMenuHide} />
      ) : null}
      <ContentContainer
        isCheckboxChecked={isCheckboxChecked}
        isMenuHide={isMenuHide}
        isHideHome={isHideHome}
      >
        <Nav>
          <List>
            {headerUkr.map((item, index) => (
              <ListItem
                key={item.id}
                onMouseOver={() => setIsClickOnNavMenu(true)}
                onMouseOut={() => setIsClickOnNavMenu(false)}
                onClick={() => handleMenuClicker({ index })}
              >
                {item.text}
              </ListItem>
            ))}
          </List>
        </Nav>
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.div`
  animation-name: ${({ isMenuHide }) =>
    isMenuHide ? "hideHeader" : "showHeader"};
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;
  ${({ isHideHome }) =>
    isHideHome
      ? `
          position: fixed;
          top: 0;
          transform: translateX(-100%);
      `
      : null}

  @keyframes showHeader {
    0% {
      transform: perspective(1000px) rotateX(180deg) scale(0, 0)
        translate(-100%, -300px);
      opacity: 0;
    }

    100% {
      transform: perspective(1000px) rotateX(0) scale(1, 1)
        ${({ isHideHome }) =>
          isHideHome ? "translate(-100%, 0)" : "translate(0, 0)"};
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

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
`;

const List = styled.ul`
  box-sizing: border-box;
  display: flex;
  border-bottom: 3px solid rgb(0, 118, 53);

  @media (max-width: 1090px) {
    padding: 40px 5px 10px;
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  white-space: nowrap;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 300ms linear;

  &:hover {
    background-color: rgb(82, 155, 45, 0.75);
    color: rgb(255, 255, 255);
    transition: all 300ms linear;
  }

  @media (max-width: 1090px) {
    padding: 8px 15px;
  }
`;
