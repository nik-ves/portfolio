import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import classes from "./ProjectNavigation.module.css";

const ProjectNavigation = (props) => {
  const projectList = props.projects; // array of objects

  const goBackwards = () => {
    let pageNumber = props.currentProject; // current index of selected object
    pageNumber--;

    if (pageNumber <= 0) {
      pageNumber = projectList.length - 1;
    }

    let link = `/projects/${projectList[pageNumber].id}`;
    return link;
  };

  const goForward = () => {
    let pageNumber = props.currentProject; // current index of selected object
    pageNumber++;

    if (pageNumber >= projectList.length) {
      pageNumber = 0;
    }

    let link = `/projects/${projectList[pageNumber].id}`;
    return link;
  };

  return (
    <div className={classes["project-navigation-content"]}>
      <Link to={goBackwards}>
        <FiArrowLeft size={30} />
      </Link>

      <Link to="/projects">
        <p className={classes["project-navigation-toggle"]}>All Projects</p>
      </Link>

      <Link to={goForward}>
        <FiArrowRight size={30} />
      </Link>
    </div>
  );
};

export default ProjectNavigation;
