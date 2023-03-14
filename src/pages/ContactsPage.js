import { ContactsCards } from "../Components/ContactsCards";
import styled from "styled-components";

export const ContactsPage = () => {
  return (
    <ContactsFlexWrapper>
      <ContactsCards />
    </ContactsFlexWrapper>
  );
};

const ContactsFlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 50px auto 0;
  max-width: 1000px;
  animation-name: showPage;
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes showPage {
    0% {
      opacity: 0;
      transform: translateX(-800px) scale(0.5, 0.5);
    }

    50% {
      transform: scale(0.7, 0.7);
    }

    100% {
      transform: scale(1, 1);
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1200px) {
    margin: 30px auto 0;
    max-width: 800px;
  }

  @media (max-width: 1090px) {
    margin: 0 auto;
    max-width: 700px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }
`;
