import {
  Card,
  ProjectDescription,
  ProjectInfo,
  ProjectName,
} from "./ProjectCardStyles";

const ProjectCard = (props) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Card to={props.link}>
      <ProjectInfo>
        <ProjectName>{formatedName(props.name)}</ProjectName>

        <ProjectDescription>{props.desc}</ProjectDescription>
      </ProjectInfo>
    </Card>
  );
};

export default ProjectCard;
