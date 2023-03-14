import { linkStyle } from "../Components/reusedStyledComponents";
import arrowImg from "../assets/icons/arrow_back.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackToBusinessLineBtn = () => {
  return (
    <BusinessLineDetailsBtnWrap>
      <Link to="/business_line" style={linkStyle}>
        <BusinessLineDetailsBtn>
          <ImgBtnArrow src={arrowImg} alt="arrow_back" />
        </BusinessLineDetailsBtn>
      </Link>
    </BusinessLineDetailsBtnWrap>
  );
};

const BusinessLineDetailsBtnWrap = styled.div`
  margin: 5px 0 -10px -25px;

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
