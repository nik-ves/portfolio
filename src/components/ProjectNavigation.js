import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

import classes from "./ProjectNavigation.module.css";

const ProjectNavigation = () => {
  return (
    <div className={classes["project-navigation-content"]}>
      <Link to="/">
        <FiArrowLeft size={30} />
      </Link>

      <Link to="/projects">
        <p className={classes["ovojetest"]}>All Projects</p>
      </Link>

      <Link to="/">
        <FiArrowRight size={30} />
      </Link>
    </div>
  );
};

export default ProjectNavigation;
