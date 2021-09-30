import { Fragment } from "react";
import { useState } from "react";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectList.module.css";

const ProjectList = () => {
  const [lpProjects, setLpProjects] = useState([
    {
      id: 1,
      name: "omnifood",
      desc: "Omnifood is a company which makes and delivers healthy food to your doorstep.",
      link: "https://github.com/nik-ves/omnifood",
    },
    {
      id: 2,
      name: "natours",
      desc: "Want to explore the wilds but don't know how? Then Natours is perfect for you!",
      link: "https://github.com/nik-ves/natours",
    },
    {
      id: 3,
      name: "trillo",
      desc: "If you need help booking a hotel or renting a car, Trillo is made for you.",
      link: "https://github.com/nik-ves/trillo",
    },
    {
      id: 4,
      name: "nexter",
      desc: "Finding a new house is hard and Nexter is here to help you out.",
      link: "https://github.com/nik-ves/nexter",
    },
    {
      id: 5,
      name: "web-challenges",
      desc: "Solutions from landing page challenge websites such as Frontend-Mentor and Codewell.",
      link: "https://github.com/nik-ves/web-challenges",
    },
  ]);

  const [jsProjects, setJsProjects] = useState([
    {
      id: 1,
      name: "monster-killer-game",
      desc: "Small browser game with a goal of killing the monster before it kills you.",
      link: "https://github.com/nik-ves/monster-killer-game",
    },
    {
      id: 2,
      name: "rock-paper-scissors",
      desc: "Basic rock, paper, scissors game. Result shown in the console.",
      link: "https://github.com/nik-ves/rock-paper-scissors",
    },
    {
      id: 3,
      name: "calculator",
      desc: "A simple calculator with the basic arithmetic operations.",
      link: "https://github.com/nik-ves/calculator",
    },
    {
      id: 4,
      name: "github-profile-search",
      desc: "See your GitHub profile simplified.",
      link: "https://github.com/nik-ves/github-profile-search",
    },
    {
      id: 5,
      name: "pig-game",
      desc: "Whoever hits 100 score first is a winner!",
      link: "https://github.com/nik-ves/pig-game",
    },
    {
      id: 6,
      name: "guess-my-number",
      desc: "Guess a number game. Secret number is logged in the console for an easy win.",
      link: "https://github.com/nik-ves/guess-my-number",
    },
  ]);

  const [reactProjects, setReactProjects] = useState([
    {
      id: 1,
      name: "expense-tracker",
      desc: "Tracker expense app made with React.js. Includes a year filter.",
      link: "https://github.com/nik-ves/expense-tracker-app",
    },
    {
      id: 2,
      name: "user-listing",
      desc: "Basic users listing app made with React.js with some form validation.",
      link: "https://github.com/nik-ves/users-listing-app",
    },
    {
      id: 3,
      name: "food-ordering",
      desc: "Food ordering app which is connected with Firebase database. Includes a simple form validation.",
      link: "https://github.com/nik-ves/order-food-app",
    },
    {
      id: 4,
      name: "form-validator",
      desc: "Validate user input with this. After submiting, user information will be shown in the console.",
      link: "https://github.com/nik-ves/form-validation-app",
    },
    {
      id: 5,
      name: "todo-app",
      desc: "Basic Todo app.",
      link: "https://github.com/nik-ves/todo-app",
    },
  ]);

  return (
    <div className={classes.wrapper}>
      <h2>Projects</h2>

      <p className={classes.text}>
        Some of the projects that i'm proud of. <br /> All of the project cards
        will take you to their GitHub repository which includes live preview of
        the project. If you want to see full list of my projects go to my <a href="https://github.com/nik-ves" target="_blank">GitHub</a> page.
      </p>

      <div>
        <h4>Landing page projects</h4>
        <div className={classes.flex}>
          {lpProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>Javascript projects</h4>

        <div className={classes.flex}>
          {jsProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className={classes["margin-top"]}>React projects</h4>

        <div className={classes.flex}>
          {reactProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <p className={classes.text}>Last updated: 30.9.2021.</p>
    </div>
  );
};

export default ProjectList;
