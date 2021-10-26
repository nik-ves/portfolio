import { Link } from "react-router-dom";

import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  return (
    <Link to={props.link} className={classes.card}>
      <div className={classes.info}>
        <p className={classes['project-name']}>{formatedName(props.name)}</p>
        <p className={classes['project-desc']}>{props.desc}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
