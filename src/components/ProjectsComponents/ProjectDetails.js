import { useState } from "react";
import { useParams } from "react-router";

import ProjectNotFound from "../pages/ProjectNotFound";

import classes from "./ProjectDetails.module.css";
import Container from "../UI/Container";
import PROJECTS from "../../data/CombinedProjects";


const ProjectDetails = () => {
  const [projects, setProjects] = useState(PROJECTS);
  const [isOpen, setIsOpen] = useState(false);

  const openImageHandler = () => {
    setIsOpen(!isOpen);
  };

  const params = useParams();

  const project = projects.find((project) => project.id === params.projectId);

  if (!project) {
    return <ProjectNotFound />
  }

  return (
    <Container>
      <div className={classes.centered}>
        <div className={classes["project-image-box"]}>
          <img src={project.imgPath} alt="test" onClick={openImageHandler} />
        </div>
        {isOpen && (
          <div
            className={classes["project-image-enlarger"]}
            onClick={openImageHandler}
          >
            <img src={project.imgPath} onClick={openImageHandler} />
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
            <p className={classes["project-info-description"]}>
              {project.description.text1}
            </p>

            <p className={classes["project-info-description"]}>
              {project.description.text2}
            </p>

            <p className={classes["project-info-description"]}>
              {project.description.text3}
            </p>

            <p className={classes["project-info-description"]}>
              {project.description.text4}
            </p>

            <p className={classes["project-info-links"]}>
              Click{" "}
              <a href={project.previewLink} target="_blank">
                here
              </a>{" "}
              to see live preview of the project or{" "}
              <a href={project.githubLink} target="_blank">
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
