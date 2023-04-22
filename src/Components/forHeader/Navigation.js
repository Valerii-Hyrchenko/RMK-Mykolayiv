import { memo } from "react";
import { PagesContext } from "../../context/pagesContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import { headerUkr } from "../../contentSettings/configs";

const Navigation = () => {
  const [isBurgerNavRender, setIsBurgerNavRender] = useState(true);
  const {
    headerRef,
    homeRef,
    businessLineRef,
    aboutCompanyRef,
    contactsRef,
    newsRef,
    isHideHome,
    isMenuHide,
    setIsMenuHide,
    IsClickOnNavMenu,
    setIsClickOnNavMenu,
    isCheckboxChecked,
    setIsCheckboxChecked,
    chooseBusinessDetails,
  } = useContext(PagesContext);
  const sectionsRefs = [businessLineRef, aboutCompanyRef, contactsRef, newsRef];

  const burgerMenuChanger = () => {
    if (!isCheckboxChecked) {
      setIsCheckboxChecked(true);
      setIsMenuHide(false);
      setIsBurgerNavRender(false);
      document.body.style.overflowY = "hidden";
    } else {
      setIsMenuHide(true);
      setIsCheckboxChecked(false);
      setTimeout(() => {
        setIsBurgerNavRender(true);
      }, 750);
      document.body.style.overflowY = "visible";
    }
  };

  const handleMenuClicker = ({ index }) => {
    if (isCheckboxChecked) burgerMenuChanger();
    if (!IsClickOnNavMenu) setIsClickOnNavMenu(true);
    if (index === 0) chooseBusinessDetails("noChosen");
    const firstScroll = () => {
      let headerHeight =
        headerRef.current.offsetTop + headerRef.current.offsetHeight;
      let homeHeight = homeRef.current.clientHeight - 1;
      let top = Math.floor(
        sectionsRefs[index].current.getBoundingClientRect().top
      );
      top -= homeHeight;
      if (index !== 0) top -= headerHeight;
      if (window.screen.width < 1091 && index !== 0)
        top += headerRef.current.offsetHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
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
      <HeaderBurgerMenu handleMenuChanger={burgerMenuChanger} />
      {isCheckboxChecked ? (
        <OutsideSpace onClick={burgerMenuChanger} isMenuHide={isMenuHide} />
      ) : null}
      <ContentContainer
        isBurgerNavRender={isBurgerNavRender}
        isMenuHide={isMenuHide}
        ref={headerRef}
      >
        <Nav>
          <List>
            {headerUkr.map((item, index) => (
              <ListItem
                key={item.id}
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

export default memo(Navigation);

const ContentContainer = styled.div`
  position: relative;
  animation-name: ${({ isMenuHide }) =>
    isMenuHide ? "hideHeader" : "showHeader"};
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes showHeader {
    0% {
      transform: perspective(1000px) rotateX(180deg) scale(0, 0)
        translate(-100%, -300px);
      opacity: 0;
    }

    100% {
      transform: perspective(1000px) rotateX(0) scale(1, 1) translate(0, 0);
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
    max-width: 228px;
    display: ${({ isBurgerNavRender }) =>
      !isBurgerNavRender ? "block" : "none"};
    margin: 50px 20px 0 0;
  }
`;

const OutsideSpace = styled.div`
  @media (max-width: 1090px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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

  @media (max-width: 1090px) {
    margin: 0;
  }
`;

const List = styled.ul`
  box-sizing: border-box;
  display: flex;
  border-bottom: 3px solid rgb(0, 118, 53);

  @media (max-width: 1090px) {
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
