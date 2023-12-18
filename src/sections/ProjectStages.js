import { memo } from "react";
import styled from "styled-components";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import SectionTitleWithArrows from "../Components/SectionTitleWithArrows";
import { projectStagesUkr } from "../contentSettings/configs";

const ProjectStages = () => {
  return (
    <ProjectStagesWrapper>
      <SectionWrapper>
        <SectionTitleWithArrows>
          {projectStagesUkr.title}
        </SectionTitleWithArrows>
        <ProjectsFlexWrapper>
          {projectStagesUkr.description.map(
            ({ id, itemTitle, img, itemText }, index) => (
              <ItemFlexContainer key={id}>
                <StageContainer>
                  <ItemTitle>{itemTitle}</ItemTitle>
                  <ItemImgWrapper>
                    <ItemImg src={img} alt="project_stage_img" />
                  </ItemImgWrapper>
                  <ItemText>{itemText}</ItemText>
                </StageContainer>
                {index !== projectStagesUkr.description.length - 1 ? (
                  <ArrowImgWrapper>
                    <ItemImg
                      src={projectStagesUkr.arrowImg}
                      alt="project_next_stage_arrow"
                    />
                  </ArrowImgWrapper>
                ) : null}
              </ItemFlexContainer>
            )
          )}
        </ProjectsFlexWrapper>
      </SectionWrapper>
    </ProjectStagesWrapper>
  );
};

export default memo(ProjectStages);

const ProjectStagesWrapper = styled.div`
  padding: 100px 0 110px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(0, 118, 53);

    @media (max-width: 800px) {
      top: 120px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 112px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(0, 118, 53);

    @media (max-width: 800px) {
      bottom: 78px;
    }
  }

  @media (max-width: 800px) {
    padding: 60px 0 50px;
  }
`;

const ProjectsFlexWrapper = styled.div`
  padding: 70px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1090px) {
    flex-wrap: wrap;
    max-width: 580px;
    margin: 0 auto;
    row-gap: 30px;
  }

  @media (max-width: 800px) {
    max-width: 270px;
    justify-content: center;
  }
`;

const ItemFlexContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1090px) {
    &:last-of-type {
      margin-right: 50px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    &:last-of-type {
      margin-right: 0px;
    }
  }
`;

const StageContainer = styled.div`
  border-radius: 25px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  box-shadow: -45px 3px 42px -60px rgba(0, 0, 0, 0.75);

  @media (max-width: 1200px) {
    max-width: 223px;
  }

  @media (max-width: 800px) {
    max-width: 223px;
    box-shadow: none;
  }
`;

const ItemTitle = styled.p`
  color: rgb(0, 118, 53);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 0;
`;

const ItemImgWrapper = styled.div`
  width: 190px;
  margin: 0 auto;
  border-radius: 20px;
`;

const ArrowImgWrapper = styled.div`
  width: 50px;

  & > img {
    @media (max-width: 800px) {
      transform: rotate(90deg);
    }
  }
`;

const ItemImg = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const ItemText = styled.p`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  border-radius: 15px;
  text-align: center;
  padding: 8px 8px 10px 8px;

  @media (max-width: 800px) {
    box-shadow: rgba(33, 35, 38, 0.7) 0px 10px 10px -10px;
  }
`;
