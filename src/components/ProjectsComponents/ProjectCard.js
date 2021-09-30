import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <a href={props.link} target="_blank" className={classes.card}>
      <div className={classes.info}>
        <p className={classes['project-name']}>{props.name}</p>
        <p className={classes['project-desc']}>{props.desc}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
