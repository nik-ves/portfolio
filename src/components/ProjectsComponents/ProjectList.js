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
        Some of the projects that i'm proud of. <br /> All of the project cards
        will take you to their GitHub repository which includes live preview of
        the project. If you want to see full list of my projects go to my{" "}
        <a href="https://github.com/nik-ves" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        page.
      </Paragraph>

      <div>
        <Headers.Tertiary>Landing page projects</Headers.Tertiary>

        <Cards>
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
        </Cards>
      </div>

      <div>
        <Headers.Tertiary marginTop>Javascript projects</Headers.Tertiary>

        <Cards>
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
        </Cards>
      </div>

      <div>
        <Headers.Tertiary marginTop>React projects</Headers.Tertiary>

        <Cards>
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
        </Cards>
      </div>

      <div>
        <Headers.Tertiary marginTop>React Native projects</Headers.Tertiary>

        <Cards>
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
        </Cards>
      </div>

      <Paragraph>Last updated: 06.02.2022.</Paragraph>
    </Wrapper>
  );
};

export default ProjectList;
