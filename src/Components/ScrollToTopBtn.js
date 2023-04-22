import styled from "styled-components";
import { SectionWrapper } from "./cards/componentsForCards/reusedStyledComponents";
import arrow from "../assets/icons/scroll_to_top_arrow.svg";
import { memo } from "react";

const ScrollToTopBtn = () => {
  return (
    <SectionWrapper>
      <ComponentWrap>
        <ScrollToTopBtnWrapper
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowToTopImg src={arrow} alt="scroll_to_top_img" />
        </ScrollToTopBtnWrapper>
      </ComponentWrap>
    </SectionWrapper>
  );
};

export default memo(ScrollToTopBtn);

const ComponentWrap = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 0;
  right: 10%;

  @media (max-width: 800px) {
    right: 15%;
  }

  @media (max-width: 480px) {
    right: 20%;
  }
`;

const ScrollToTopBtnWrapper = styled.div`
  position: fixed;
  bottom: 8%;
  background-color: rgb(210, 211, 213, 0.7);
  box-sizing: border-box;
  border-radius: 50%;
  line-height: 0;
  cursor: pointer;
  transition: all 500ms linear;
  animation-name: showBtn;
  animation-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 5px 9px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
    transition: all 250ms linear;
  }

  @keyframes showBtn {
    0% {
      opacity: 0;
      transform: scale(0.2, 0.2);
    }

    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;

const ArrowToTopImg = styled.img``;
