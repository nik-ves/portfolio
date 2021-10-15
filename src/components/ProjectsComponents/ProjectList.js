import { useState } from "react";

import classes from "./ProjectList.module.css";
import ProjectCard from "./ProjectCard";

import LANDING_PAGE_PROJECTS from "../../data/LandingPageProjects";
import JAVASCRIPT_PROJECTS from "../../data/JavaScriptProjects";
import REACT_PROJECTS from "../../data/ReactProjects";

const ProjectList = () => {
  const [lpProjects] = useState(LANDING_PAGE_PROJECTS);
  const [jsProjects] = useState(JAVASCRIPT_PROJECTS);
  const [reactProjects] = useState(REACT_PROJECTS);

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
          {lpProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>Javascript projects</h4>

        <div className={classes.flex}>
          {jsProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>React projects</h4>

        <div className={classes.flex}>
          {reactProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <p className={classes.text}>Last updated: 30.9.2021.</p>
    </div>
  );
};

export default ProjectList;
