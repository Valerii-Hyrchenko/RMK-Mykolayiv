import styled from "styled-components";
import listMarker from "../../../assets/icons/list_marker.svg";

export const SectionWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 1090px;
  }

  @media (max-width: 1090px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 550px;
  }

  @media (max-width: 550px) {
    max-width: 480px;
  }

  @media (max-width: 480px) {
    max-width: 360px;
  }

  @media (max-width: 360px) {
    max-width: 320px;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  transition: all 0.4s ease-in-out;
  border-radius: 45px;
  ${({ isContacts }) =>
    isContacts
      ? `
          width: 170px;
          box-shadow: 0 0px 0px rgba(0,0,0,0.1);
            
          @media (max-width: 1200px) {
            transform: scale(0.9, 0.9);
          }

          @media (max-width: 1090px) {
            transform: scale(0.75, 0.75);
          }

          @media (max-width: 800px) {
            transform: scale(0.9, 0.9);
            margin: 0 35px 40px 0;
          }

          @media (max-width: 550px) {
            transform: scale(0.8, 0.8);
          }
          
          &:hover{
            transform: translateY(-10px) scale(1.05, 1.05);

            @media (max-width: 1200px) {
              transform: translateY(-10px) scale(0.95, 0.95);
            }

            @media (max-width: 1090px) {
              transform: translateY(-10px) scale(0.8, 0.8);
            }

            @media (max-width: 800px) {
              transform: translateY(-10px) scale(0.95, 0.95);
            }

            @media (max-width: 550px) {
              transform: translateY(-10px) scale(0.9, 0.9);
            }
          }
  `
      : `
          transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9);

            @media (max-width: 1090px) {
              transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.8, 0.8);
            }

            @media (max-width: 800px) {
              transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9);
            }
            
            &:hover {
              transform: translate3d(0px, 0px, -250px);

              @media (max-width: 1090px) {
              transform: translate3d(0px, 0px, -250px) scale(0.85, 0.85);

              @media (max-width: 800px) {
                transform: translate3d(0px, 0px, -250px) scale(0.88, 0.88);
              }
            }
          }
      `}
`;

export const BackgroundBlock = styled.div`
  width: 180px;
  height: 105px;
  border-radius: 15px;
  position: absolute;
  border: 2px solid rgb(82, 155, 45);

  ${({ isTransparent }) =>
    isTransparent
      ? `
        border: 4px solid rgb(82, 155, 45);
        top: -22px;
        right: -22px;
      `
      : `
        background-color: rgb(82, 155, 45);
        bottom: -22px;
        left: -22px;
      `}
`;

export const ItemContainer = styled.div`
  position: relative;
  z-index: 5;
  height: 260px;
  width: 180px;
  padding: 20px 20px 40px;
  background-color: rgb(255, 255, 255);
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  box-shadow: rgb(82, 155, 45, 0.9) 0px 1px 2px 0px,
    rgb(82, 155, 45, 0.5) 0px 2px 6px 2px;
  cursor: pointer;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);

  ${({ isContacts }) =>
    isContacts &&
    `
      ${ImgWrapper} {
        margin-top: 20px;
        width: 100px;
      }

      ${Title} {
        width: 220px;
      }

    `}

  ${({ isInfoHide }) =>
    isInfoHide
      ? `
      ${ImgWrapper} {
        animation-name: hideInfoImg;
      }
      ${Title} {
        animation-name: hideInfoTitle;
      }
      `
      : `
      ${ImgWrapper} {
        animation-name: showInfoImg;
      }
      ${Title} {
        animation-name: showInfoTitle;
      }
      `}

  ${({ isInfoRender }) =>
    isInfoRender &&
    `
      ${ImgWrapper} {
        margin-top: 0;
        padding: 0;
        width: 70px;
        animation-duration: 600ms;
        transition-timing-function: ease-in-out;
      }

      ${Title} {
        bottom: 176px;
        animation-duration: 600ms;
        transition-timing-function: ease-in-out;
      }
      
    `}

  @keyframes showInfoTitle {
    0% {
      bottom: 42px;
    }

    100% {
      bottom: 176px;
    }
  }
  @keyframes hideInfoTitle {
    0% {
      bottom: 176px;
    }

    100% {
      bottom: 42px;
    }
  }
  @keyframes showInfoImg {
    0% {
      width: 100px;
      margin-top: 20px;
      padding-top: 10px;
    }
    100% {
      width: 70px;
      margin-top: 0;
      padding-top: 0;
    }
  }
  @keyframes hideInfoImg {
    0% {
      width: 70px;
      margin-top: 0;
      padding-top: 0;
    }
    100% {
      width: 100px;
      margin-top: 20px;
      padding-top: 10px;
    }
  }
`;

export const ImgWrapper = styled.div`
  max-width: 155px;
  margin: 0 auto;
  padding: 10px 0 0;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.p`
  position: absolute;
  bottom: 42px;
  left: 0;
  width: 221px;
  padding: 12px 0;
  font-size: 1.1em;
  font-weight: 700;
  color: rgb(82, 155, 45);
  background-color: rgb(82, 155, 45, 0.25);
  text-align: center;
`;

export const DetailsWrap = styled.div`
  width: 630px;
  background-color: rgb(255, 255, 255);
  margin-left: 100px;
  padding: 0 35px 30px;
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  ${({ isBusinessLineProjects }) =>
    isBusinessLineProjects &&
    `
        ${BusinessLineDetailsTitle} {

          @media (max-width: 1090px) {
            font-size: 1.05em;
            line-height: 1.05em;
          }

          @media (max-width: 800px) {
            font-size: 1.3em;
            line-height: 1.3em;
          }

          @media (max-width: 480px) {
            font-size: 1.1em;
            line-height: 1.1em;
            padding: 8px 0;
          }
        }

        ${BusinessLineDetailsItem} {
          @media (max-width: 1090px) {
            line-height: 1.15em;
            font-size: 0.9em;
            padding-left: 5px;
          }

          @media (max-width: 800px) {
            line-height: 1.4em;
            font-size: 1em;
            padding-left: 10px;
          }

          @media (max-width: 480px) {
            line-height: 1.2em;
            margin-bottom: 2px;
          }
           @media (max-width: 420px) {
            padding-left: 5px;
          }

          @media (max-width: 360px) {
            line-height: 1.15em;
            font-size: 0.95em;
          }
        }
      `}

  @media (max-width: 1090px) {
    margin-left: 20px;
    max-width: 460px;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }

  @media (max-width: 550px) {
    max-width: 395px;
  }

  @media (max-width: 480px) {
    max-width: 330px;
  }

  @media (max-width: 420px) {
    max-width: 305px;
    padding: 0px 30px 12px 30px;
  }

  @media (max-width: 380px) {
    max-width: 290px;
    padding: 0px 25px 10px 25px;
  }

  @media (max-width: 360px) {
    max-width: 260px;
  }

  ${({ isMissionSect }) =>
    isMissionSect
      ? `
          padding: 15px 35px 10px 50px;
          width: 530px;
          margin-left: 0;

          @media (max-width: 1090px) {
            padding: 20px 30px 10px 30px;
          }

          @media (max-width: 360px) {
            padding: 20px 25px 10px 25px;
          }
        `
      : null}
`;

export const BusinessLineDetailsTitle = styled.p`
  font-size: 1.1em;
  line-height: 1.2em;
  font-weight: 700;
  color: rgb(0, 118, 53);
  padding: 10px 0 5px;

  @media (max-width: 1200px) {
    line-height: 1.1em;
  }

  @media (max-width: 800px) {
    font-size: 1.3em;
    padding: 12px 0 15px;
  }
`;

export const BusinessLineDetailsList = styled.ul`
  padding-left: 30px;

  @media (max-width: 800px) {
    font-size: 1.2em;
    line-height: 1.5em;
  }

  @media (max-width: 420px) {
    padding-left: 22px;
  }
`;

export const BusinessLineDetailsItem = styled.li`
  line-height: 1.4em;
  list-style-image: url(${listMarker});
  padding-left: 10px;

  @media (max-width: 1200px) {
    line-height: 1.3em;
  }
`;
