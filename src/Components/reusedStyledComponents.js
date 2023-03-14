import { headerUkr } from "../contentSettings/configs";
import styled from "styled-components";
import listMarker from "../assets/icons/list_marker.svg";

export const linkStyle = {
  textDecoration: "none",
};

export const ItemContainer = styled.div`
  position: relative;
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
  transition: all 0.4s ease-in-out;

  ${({ currentPage }) =>
    currentPage && currentPage.text === headerUkr[2].text
      ? `
        width: 170px;
        box-shadow: 0 0px 0px rgba(0,0,0,0.1);
          &:hover{
            transform: translateY(-10px) scale(1.05, 1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.4);

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

        @media (max-width: 1200px) {
          transform: scale(0.9, 0.9);
        }

        @media (max-width: 1090px) {
          transform: scale(0.7, 0.7);
        }

        @media (max-width: 800px) {
          transform: scale(0.9, 0.9);
        }

        @media (max-width: 550px) {
          transform: scale(0.8, 0.8);
        }
        `
      : `
        transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9);

        @media (max-width: 1090px) {
          transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.75, 0.75);
        }

        @media (max-width: 800px) {
          transform: perspective(1000px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9);
        }
        
        &:hover {
          transform: translate3d(0px, 0px, -250px);

          @media (max-width: 1090px) {
          transform: translate3d(0px, 0px, -250px) scale(0.8, 0.8);

          @media (max-width: 800px) {
            transform: translate3d(0px, 0px, -250px) scale(0.88, 0.88);
          }
        }
        }
      `};

  ${({ currentPage }) =>
    currentPage &&
    currentPage.text === headerUkr[2].text &&
    `
      ${ImgWrapper} {
        margin-top: 20px;
        width: 100px;
      }

      ${Title} {
        width: 211px;
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

export const BusinessLineDetailsWrap = styled.div`
  max-width: 550px;
  background-color: rgb(255, 255, 255);
  margin-left: 100px;
  padding: 0 40px 30px;
  border: 4px solid rgb(82, 155, 45);
  border-radius: 45px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 1200px) {
    padding: 0 30px 20px;
  }

  @media (max-width: 1090px) {
    margin-left: 20px;
    max-width: 460px;

    ${({ isBusinessLineProjects }) =>
      isBusinessLineProjects &&
      `
        ${BusinessLineDetailsTitle} {
          font-size: 1em;
          line-height: 1em;
        }

        ${BusinessLineDetailsItem} {
          line-height: 1.2em;
          font-size: 0.85em;
          padding-left: 5px;
        }
      `}
  }
  @media (max-width: 800px) {
    margin-left: 0;

    ${({ isBusinessLineProjects }) =>
      isBusinessLineProjects &&
      `
        ${BusinessLineDetailsTitle} {
          font-size: 1.1em;
          line-height: 1.2em;
        }

        ${BusinessLineDetailsItem} {
          line-height: 1.4em;
          font-size: 1em;
          padding-left: 10px;
        }
      `}
  }

  @media (max-width: 550px) {
    max-width: 385px;
  }

  @media (max-width: 480px) {
    max-width: 270px;
  }
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
`;

export const BusinessLineDetailsList = styled.ul`
  padding-left: 30px;
`;

export const BusinessLineDetailsItem = styled.li`
  line-height: 1.4em;
  list-style-image: url(${listMarker});
  padding-left: 10px;

  @media (max-width: 1200px) {
    line-height: 1.3em;
  }
`;
