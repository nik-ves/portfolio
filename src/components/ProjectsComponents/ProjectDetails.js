import { useState } from "react";
import { useParams } from "react-router";
import { FiGithub, FiEye } from "react-icons/fi";

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
    return (
      <div className="centered">
        <p>No project found!</p>
      </div>
    );
  }

  return (
    <Container>
      <div className={classes.centered}>
        <div className={classes["project-image-box"]}>
          <img src={project.imgPath} alt="test" onClick={openImageHandler} />
        </div>
        {isOpen && (
          <div className={classes.projecttest} onClick={openImageHandler}>
            <img
              src={project.imgPath}
              onClick={openImageHandler}
            />
          </div>
        )}

        <p>{project.name}</p>
        <div>
          <a href={project.githubLink} exact target="_blank">
            <FiGithub size={20} />
          </a>

          <a href={project.previewLink} exact target="_blank">
            <FiEye size={20} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
