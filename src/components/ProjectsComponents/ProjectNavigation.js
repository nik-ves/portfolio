import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { ShowAll, Wrapper } from "./ProjectNavigationStyles";

import usePage from "../../hooks/use-page";

const ProjectNavigation = (props) => {
  const { goBackwards, goForwards } = usePage(props.currentProject);

  const changeProjectHandler = () => {
    props.onProjectChange();
  };

  return (
    <Wrapper onClick={changeProjectHandler}>
      <Link to={goBackwards}>
        <FiArrowLeft size={30} />
      </Link>

      <Link to="/projects">
        <ShowAll>All Projects</ShowAll>
      </Link>

      <Link to={goForwards}>
        <FiArrowRight size={30} />
      </Link>
    </Wrapper>
  );
};

export default ProjectNavigation;
