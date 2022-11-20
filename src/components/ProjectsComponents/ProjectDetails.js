import { useState } from "react";
import { useParams } from "react-router";

import {
  Description,
  InfoBox,
  Code,
  TextBox,
  Wrapper,
  ImageSlider,
  SocialLink,
  Links,
} from "./ProjectDetailsStyles";

import * as Headers from "../UI/Headers";
import { VscGithub, VscEye } from "react-icons/vsc";
import PageNotFound from "../../pages/PageNotFound";
import Container from "../UI/Container";
import ProjectNavigation from "./ProjectNavigation";

import PROJECTS from "../../data/Projects";

const ProjectDetails = () => {
  const [projects] = useState(PROJECTS);
  const [startingImage, setStartingImage] = useState(0);
  const [imagesLoading, setImagesLoading] = useState(false);

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
    setImagesLoading(true);
    setStartingImage(0);
    setImagesLoading(false);
  };

  return (
    <Container>
      <ProjectNavigation
        onProjectChange={setImageHandler}
        projects={projects}
        currentProject={pageIndex}
      />

      <Wrapper>
        {!imagesLoading && (
          <ImageSlider
            selectedItem={startingImage}
            onChange={(index) => {
              setStartingImage(index);
            }}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            transitionTime={0}
          >
            {Object.keys(project.images).map((index) => {
              return (
                <div key={index}>
                  <img src={project.images[index]} alt="project" />
                </div>
              );
            })}
          </ImageSlider>
        )}

        <InfoBox>
          <Headers.Secondary Title>
            {formatedName(project.name)}
          </Headers.Secondary>
          <Links>
            <SocialLink
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub />
            </SocialLink>

            <SocialLink
              href={project.previewLink}
              target="_blank"
              rel="noreferrer"
            >
              <VscEye />
            </SocialLink>
          </Links>

          <TextBox>
            <Headers.Secondary TitleLeft>About</Headers.Secondary>
            {Object.keys(project.about).map((index) => {
              return (
                <Description key={index}>{project.about[index]}</Description>
              );
            })}

            <Headers.Secondary TitleLeft>How it works</Headers.Secondary>
            {Object.keys(project.howItWorks).map((index) => {
              return (
                <Description key={index}>
                  {project.howItWorks[index]}
                </Description>
              );
            })}

            <Headers.Secondary TitleLeft>Installation</Headers.Secondary>
            <Description>
              To try out this project locally you will need download the project
              and navigate to it's folder. After you do that you need to install
              all of the dependencies that the project needs and then run it.
              Open the project and open the console and run these two commands.
            </Description>

            <Description>Install dependencies:</Description>
            <Code>npm install</Code>

            <Description>Start the project:</Description>
            <Code>npm start</Code>
          </TextBox>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default ProjectDetails;
