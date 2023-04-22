import { useContext, memo } from "react";
import styled from "styled-components";
import { PagesContext } from "../../context/pagesContext";

const HeaderBurgerMenu = ({ handleMenuChanger }) => {
  const { isCheckboxChecked } = useContext(PagesContext);
  return (
    <CheckboxWrapper>
      <LabelCheckbox>
        <InputCheckbox
          onChange={handleMenuChanger}
          type="checkbox"
          checked={isCheckboxChecked}
        />
        <AnimLine />
        <AnimLine />
        <AnimLine />
      </LabelCheckbox>
    </CheckboxWrapper>
  );
};

export default memo(HeaderBurgerMenu);

const CheckboxWrapper = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 20;
  margin: 18px 5px 0 0;
  max-width: 40px;
  display: none;

  @media (max-width: 1090px) {
    display: block;
  }
`;

const LabelCheckbox = styled.label`
  display: flex;
  flex-direction: column;
  width: 40px;
  cursor: pointer;
`;

const InputCheckbox = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotateZ(45deg) translate(6px, 0px) scale(0.8, 0.8);
  }

  &:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotateZ(-45deg) scale(0.8, 0.8);
  }

  &:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(16px, -8px) rotatez(45deg) scale(0.8, 0.8);
  }
`;

const AnimLine = styled.span`
  background: rgb(0, 118, 53);
  border-radius: 10px;
  height: 4px;
  margin: 4px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:nth-of-type(1) {
    width: 50%;
  }

  &:nth-of-type(2) {
    width: 100%;
  }

  &:nth-of-type(3) {
    width: 75%;
  }
`;
