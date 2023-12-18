import {
  ItemContainer,
  ImgWrapper,
  Img,
  Title,
  CardWrapper,
  BackgroundBlock,
} from "../cards/componentsForCards/reusedStyledComponents";
import { contactsUkr } from "../../contentSettings/configs";
import { useState, memo } from "react";
import styled from "styled-components";

const ContactsCards = () => {
  const [phoneToggle, setPhoneToggle] = useState(false);
  const [mailToggle, setMailToggle] = useState(false);
  const [addressToggle, setAddressToggle] = useState(false);

  const [animHidePhone, setAnimHidePhone] = useState(true);
  const [animHideMail, setAnimHideMail] = useState(true);
  const [animHideAddress, setAnimHideAddress] = useState(true);

  const states = [phoneToggle, mailToggle, addressToggle];
  const setters = [setPhoneToggle, setMailToggle, setAddressToggle];

  const animStates = [animHidePhone, animHideMail, animHideAddress];
  const animSetters = [setAnimHidePhone, setAnimHideMail, setAnimHideAddress];

  const handleContactsToggle = (index) => {
    animSetters[index](states[index]);
    let duration = states[index] ? 550 : 0;
    setTimeout(() => {
      setters[index]((prev) => !prev);
    }, duration);
  };

  return contactsUkr.map(({ id, img, title, info }, index) => (
    <CardWrapper key={id} isContacts={true}>
      <ItemContainer
        onClick={() => handleContactsToggle(index)}
        isInfoRender={states[index]}
        isInfoHide={animStates[index]}
        isContacts={true}
      >
        <ImgWrapper>
          <Img src={img} alt="item_icon" />
        </ImgWrapper>
        <Title>{title}</Title>
        {states[index] ? (
          <InfoWrapper>
            <Info isInfoHide={animStates[index]}>{info}</Info>
          </InfoWrapper>
        ) : null}
      </ItemContainer>
      {index !== 1 ? <BackgroundBlock isTransparent={index !== 0} /> : null}
    </CardWrapper>
  ));
};

export default memo(ContactsCards);

const InfoWrapper = styled.div`
  text-align: center;
`;

const ImgArrow = styled.img``;

const Info = styled.p`
  width: 170px;
  margin: 0 auto;
  color: rgb(0, 118, 53);
  font-size: 1.1em;
  word-wrap: break-word;
  line-height: 1.2em;
  padding-top: 60px;
  position: relative;
  animation-name: ${({ isInfoHide }) => (isInfoHide ? "hideInfo" : "showInfo")};
  animation-duration: 600ms;
  transition-timing-function: ease-in-out;

  @keyframes showInfo {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    10% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hideInfo {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;
