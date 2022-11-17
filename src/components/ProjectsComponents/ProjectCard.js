import {
  Card,
  ProjectDescription,
  ProjectInfo,
  ProjectName,
} from "./ProjectCardStyles";
import { useState } from "react";

const ProjectCard = (props) => {
  const [isHover, setIsHover] = useState(false);

  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Card to={props.link}>
      <ProjectInfo
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isHover && <ProjectName>{formatedName(props.name)}</ProjectName>}

        {isHover && <ProjectDescription>{props.desc}</ProjectDescription>}
      </ProjectInfo>
    </Card>
  );
};

export default ProjectCard;
