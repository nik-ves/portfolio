import { useState } from "react";
import { useParams } from "react-router";

import classes from "./ProjectDetails.module.css";

import ProjectNotFound from "../pages/ProjectNotFound";
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
    return <ProjectNotFound />;
  }

  let pageIndex = projects.findIndex(
    (element) => element.name === params.projectId
  );

  return (
    <Container>
      <ProjectNavigation projects={projects} currentProject={pageIndex} />

      {isOpen && <Backdrop onClick={openImageHandler} />}

      <div className={classes.centered}>
        <div className={classes["project-image-box"]}>
          <img src={project.imgPath} alt="img" onClick={openImageHandler} />
        </div>
        {isOpen && (
          <div
            className={classes["project-image-enlarger"]}
            onClick={openImageHandler}
          >
            <img src={project.imgPath} alt="img" onClick={openImageHandler} />
          </div>
        )}

        <div className={classes["project-info"]}>
          <div>
            <h2>{project.name}</h2>
            <p className={classes["picture-text"]}>
              Click on the image to see its preview.
            </p>
          </div>

          <div className={classes["project-text-box"]}>
            {Object.keys(project.longDescription).map((index) => {
              return (
                <p key={index} className={classes["project-info-description"]}>
                  {project.longDescription[index]}
                </p>
              );
            })}

            <p className={classes["project-info-links"]}>
              Click{" "}
              <a href={project.previewLink} target="_blank" rel="noreferrer">
                here
              </a>{" "}
              to see live preview of the project or{" "}
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                here
              </a>{" "}
              to see project code on GitHub.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
