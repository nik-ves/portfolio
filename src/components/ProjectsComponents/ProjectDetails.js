import { useState } from "react";
import { useParams } from "react-router";

import {
  Description,
  EnlargedImageBox,
  ImageBox,
  InfoBox,
  Links,
  PictureText,
  TextBox,
  Wrapper,
} from "./ProjectDetailsStyles";

import * as Headers from "../UI/Headers";

import PageNotFound from "../../pages/PageNotFound";
import Container from "../UI/Container";
import ProjectNavigation from "./ProjectNavigation";
import Backdrop from "../UI/Backdrop";

import PROJECTS from "../../data/Projects";

const ProjectDetails = () => {
  const [projects] = useState(PROJECTS);
  const [isOpen, setIsOpen] = useState(false);

  const openImageHandler = () => {
    setIsOpen(!isOpen);
  };

  const params = useParams();
  const project = projects.find((project) => project.name === params.projectId);

  if (!project) {
    return <PageNotFound />;
  }

  let pageIndex = projects.findIndex(
    (element) => element.name === params.projectId
  );

  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Container>
      <ProjectNavigation projects={projects} currentProject={pageIndex} />

      {isOpen && <Backdrop onClick={openImageHandler} />}

      <Wrapper>
        <ImageBox>
          <img src={project.imgPath} alt="img" onClick={openImageHandler} />
        </ImageBox>
        {isOpen && (
          <EnlargedImageBox onClick={openImageHandler}>
            <img src={project.imgPath} alt="img" onClick={openImageHandler} />
          </EnlargedImageBox>
        )}

        <InfoBox>
          <div>
            <Headers.Secondary Title>
              {formatedName(project.name)}
            </Headers.Secondary>
            <PictureText>Click on the image to see its preview.</PictureText>
          </div>

          <TextBox>
            {Object.keys(project.longDescription).map((index) => {
              return (
                <Description>{project.longDescription[index]}</Description>
              );
            })}

            <Links>
              Click{" "}
              <a href={project.previewLink} target="_blank" rel="noreferrer">
                here
              </a>{" "}
              to see live preview of the project or{" "}
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                here
              </a>{" "}
              to see project code on GitHub.
            </Links>
          </TextBox>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default ProjectDetails;
