import { useState } from "react";

import { Cards, Paragraph, Wrapper } from "./ProjectListStyles";
import * as Headers from "../UI/Headers";

import ProjectCard from "./ProjectCard";
import PROJECTS from "../../data/Projects";

const ProjectList = () => {
  const [projects] = useState(PROJECTS);

  return (
    <Wrapper>
      <Headers.Secondary>Projects</Headers.Secondary>

      <Paragraph>
        Some of the projects that i'm proud of. All of the project cards will
        take you to their details. <br /> If you want to see full list of my
        projects go to my{" "}
        <a href="https://github.com/nik-ves" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        page.
      </Paragraph>

      <div>
        <Cards>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.description}
              link={`/projects/${project.name}`}
            />
          ))}
        </Cards>
      </div>
    </Wrapper>
  );
};

export default ProjectList;
