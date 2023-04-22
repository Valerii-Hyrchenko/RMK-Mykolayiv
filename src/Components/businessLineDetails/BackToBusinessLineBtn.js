import { memo, useContext } from "react";
import arrowImg from "../../assets/icons/arrow_back.svg";
import styled from "styled-components";
import { PagesContext } from "../../context/pagesContext";

const BackToBusinessLineBtn = () => {
  const { chooseBusinessDetails } = useContext(PagesContext);
  return (
    <BusinessLineDetailsBtnWrap
      onClick={() => chooseBusinessDetails({ id: "noChosen" })}
    >
      <BusinessLineDetailsBtn>
        <ImgBtnArrow src={arrowImg} alt="arrow_back" />
      </BusinessLineDetailsBtn>
    </BusinessLineDetailsBtnWrap>
  );
};

export default memo(BackToBusinessLineBtn);

const BusinessLineDetailsBtnWrap = styled.div`
  margin: 5px 0 -10px -25px;
  cursor: pointer;

  @media (max-width: 1200px) {
    margin: 5px 0 -10px -15px;
  }
`;

const BusinessLineDetailsBtn = styled.div`
  width: 40px;

  @media (max-width: 1090px) {
    width: 30px;
  }
`;

const ImgBtnArrow = styled.img`
  width: 100%;
`;
