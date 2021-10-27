import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import classes from "./ProjectNavigation.module.css";

import usePage from "../../hooks/use-page";

const ProjectNavigation = (props) => {
  const { goBackwards, goForwards } = usePage(props.currentProject);

  return (
    <div className={classes["project-navigation-content"]}>
      <Link to={goBackwards}>
        <FiArrowLeft size={30} />
      </Link>

      <Link to="/projects">
        <p className={classes["project-navigation-toggle"]}>All Projects</p>
      </Link>

      <Link to={goForwards}>
        <FiArrowRight size={30} />
      </Link>
    </div>
  );
};

export default ProjectNavigation;
