import ContactsCards from "../Components/cards/ContactsCards";
import styled from "styled-components";
import Footer from "../Components/Footer";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import SectionTitleHeadline from "../Components/SectionTitleHeadline";
import { sectionsTitles } from "../contentSettings/configs";
import { useContext, memo } from "react";
import { PagesContext } from "../context/pagesContext";

const Contacts = () => {
  const { contactsRef } = useContext(PagesContext);
  return (
    <BackgroundWrapper ref={contactsRef}>
      <SectionTitleHeadline>
        {sectionsTitles.contacts.text}
      </SectionTitleHeadline>
      <SectionWrapper>
        <ContactsFlexWrapper>
          <ContactsCards />
        </ContactsFlexWrapper>
      </SectionWrapper>
      <Footer />
    </BackgroundWrapper>
  );
};

export default memo(Contacts);

const BackgroundWrapper = styled.div`
  position: relative;
  scroll-margin-top: 100px;
  background-color: rgb(240, 240, 240);

  @media (max-width: 1090px) {
    scroll-margin-top: 70px;
  }
`;

const ContactsFlexWrapper = styled.div`
  padding: 62px 0 125px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1200px) {
    max-width: 800px;
  }

  @media (max-width: 1090px) {
    max-width: 700px;
    padding: 35px 0 90px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 260px;
  }

  @media (max-width: 550px) {
    padding: 35px 0 70px;
  }
`;
