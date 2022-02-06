import { useState } from "react";

import classes from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";
import PROJECTS from "../../data/Projects";

const ProjectList = () => {
  const [projects] = useState(PROJECTS);

  return (
    <div className={classes.wrapper}>
      <h2>Projects</h2>

      <p className={classes.text}>
        Some of the projects that i'm proud of. <br /> All of the project cards
        will take you to their GitHub repository which includes live preview of
        the project. If you want to see full list of my projects go to my{" "}
        <a href="https://github.com/nik-ves" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        page.
      </p>

      <div>
        <h4>Landing page projects</h4>

        <div className={classes.flex}>
          {projects
            .filter((project) => project.type === "Landing page")
            .map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                desc={project.shortDescription}
                link={`/projects/${project.name}`}
              />
            ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>Javascript projects</h4>

        <div className={classes.flex}>
          {projects
            .filter((project) => project.type === "Javascript")
            .map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                desc={project.shortDescription}
                link={`/projects/${project.name}`}
              />
            ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>React projects</h4>

        <div className={classes.flex}>
          {projects
            .filter((project) => project.type === "React")
            .map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                desc={project.shortDescription}
                link={`/projects/${project.name}`}
              />
            ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>React Native projects</h4>

        <div className={classes.flex}>
          {projects
            .filter((project) => project.type === "React Native")
            .map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                desc={project.shortDescription}
                link={`/projects/${project.name}`}
              />
            ))}
        </div>
      </div>

      <p className={classes.text}>Last updated: 06.02.2022.</p>
    </div>
  );
};

export default ProjectList;
