import styled from "styled-components";
import { SectionWrapper } from "../Components/cards/componentsForCards/reusedStyledComponents";
import { SectionTitleWithArrows } from "../Components/SectionTitleWithArrows";
import { projectStages } from "../contentSettings/configs";

export const ProjectStages = () => {
  return (
    <ProjectStagesWrapper>
      <SectionWrapper>
        <SectionTitleWithArrows>{projectStages.title}</SectionTitleWithArrows>
        <ProjectsFlexWrapper>
          {projectStages.description.map(
            ({ id, itemTitle, img, itemText }, index) => (
              <ItemFlexContainer key={id}>
                <StageContainer>
                  <ItemTitle>{itemTitle}</ItemTitle>
                  <ItemImgWrapper>
                    <ItemImg src={img} alt="project_stage_img" />
                  </ItemImgWrapper>
                  <ItemText>{itemText}</ItemText>
                </StageContainer>
                {index !== projectStages.description.length - 1 ? (
                  <ArrowImgWrapper>
                    <ItemImg
                      src={projectStages.arrowImg}
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

const ProjectStagesWrapper = styled.div`
  padding: 90px 0 120px;
`;

const ProjectsFlexWrapper = styled.div`
  border-top: 2px solid rgb(0, 118, 53);
  border-bottom: 2px solid rgb(0, 118, 53);
  padding: 70px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemFlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StageContainer = styled.div`
  max-width: 240px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

const ItemTitle = styled.p`
  color: rgb(0, 118, 53);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;

const ItemImgWrapper = styled.div`
  width: 190px;
  margin: 0 auto;
  border-radius: 20px;
`;

const ArrowImgWrapper = styled.div`
  width: 50px;
`;

const ItemImg = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const ItemText = styled.p`
  text-align: center;
`;
