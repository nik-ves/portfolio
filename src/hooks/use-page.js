import { useState } from "react";

import PROJECTS from "../data/Projects";

const usePage = (currentProject) => {
  const [projects] = useState(PROJECTS);

  const goBackwards = () => {
    let pageNumber = currentProject;
    pageNumber--;

    if (pageNumber < 0) {
      pageNumber = projects.length - 1;
    }

    let link = `/projects/${projects[pageNumber].name}`;
    return link;
  };

  const goForwards = () => {
    let pageNumber = currentProject;
    pageNumber++;

    if (pageNumber >= projects.length) {
      pageNumber = 0;
    }

    let link = `/projects/${projects[pageNumber].name}`;
    return link;
  };

  return {
    goBackwards,
    goForwards,
  };
};

export default usePage;
