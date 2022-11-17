import { useState } from "react";
import { useParams } from "react-router";

import {
  Description,
  InfoBox,
  Links,
  TextBox,
  Wrapper,
  ImageSlider,
} from "./ProjectDetailsStyles";

import * as Headers from "../UI/Headers";

import PageNotFound from "../../pages/PageNotFound";
import Container from "../UI/Container";
import ProjectNavigation from "./ProjectNavigation";

import PROJECTS from "../../data/Projects";

const ProjectDetails = () => {
  const [projects] = useState(PROJECTS);
  let [startingImage, setStartingImage] = useState(0);

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

  const setImageHandler = () => {
    setStartingImage(0);
  };

  return (
    <Container>
      <ProjectNavigation
        onProjectChange={setImageHandler}
        projects={projects}
        currentProject={pageIndex}
      />

      <Wrapper>
        <ImageSlider
          selectedItem={startingImage}
          onChange={(index) => {
            setStartingImage(index);
          }}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          {Object.keys(project.images).map((index) => {
            return (
              <div key={index}>
                <img src={project.images[index]} alt="project" />
              </div>
            );
          })}
        </ImageSlider>

        <InfoBox>
          <div>
            <Headers.Secondary Title>
              {formatedName(project.name)}
            </Headers.Secondary>
          </div>

          <TextBox>
            {Object.keys(project.longDescription).map((index) => {
              return (
                <Description key={index}>
                  {project.longDescription[index]}
                </Description>
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
