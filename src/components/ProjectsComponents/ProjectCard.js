import { Link } from "react-router-dom";

import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <Link to={props.link} className={classes.card}>
      <div className={classes.info}>
        <p className={classes['project-name']}>{props.name}</p>
        <p className={classes['project-desc']}>{props.desc}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
