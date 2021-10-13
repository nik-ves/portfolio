import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import classes from "./ProjectNavigation.module.css";

const ProjectNavigation = (props) => {
  const projectList = props.projects; // 
  let pageNumber = props.currentProject; // current index of selected object
  
  console.log(projectList[pageNumber].id)

  // console.log(projects[projectIndex].id)

  // const goForward = () => {
  //   pageNumber++; // incrementing index
  //   console.log(pageNumber);

  //   if (pageNumber >= projects.length) {
  //     pageNumber = 0;
  //   }

  //   let link = `/projects/${projects[pageNumber].id}`;
  //   return link;
  // };

  // const goBackwards = () => {
  //   pageNumber--;
  //   // console.log(pageNumber);

  //   // if (pageNumber = 0) {
  //   //   return;
  //   // }

  //   // if (pageNumber < projectList.length) {
  //   //   setPageNumber(0);
  //   // } else {
  //   //   let link = `/projects/${projectList[pageNumber].id}`;
  //   //   console.log(pageNumber);
  //   //   return link;
  //   // }
  // };

  return (
    <div className={classes["project-navigation-content"]}>
      <Link to="/">
        <FiArrowLeft size={30} />
      </Link>

      {/* <button onClick={goForward}>POVECAJ</button>
      <button onClick={goBackwards}>SMANJI</button> */}

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
