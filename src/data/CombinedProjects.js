const PROJECTS = [
  {
    id: "omnifood",
    name: "Omnifood Landing Page",
    description: {
      text1:
        "Omnifood is a fictional company which makes and delivers healthy food to your doorstep.",
      text2:
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like these was to master positioning and styling. Technologies used to build this are: HTML, CSS and jQuery.",
    },
    githubLink: "https://github.com/nik-ves/omnifood",
    previewLink: "https://nik-ves.github.io/omnifood/",
    imgPath: "/images/omnifood-project.png",
  },
  {
    id: "natours",
    name: "Natours Landing Page",
    description: {
      text1:
        "Want to explore the wilds but don't know how? Then Natours is perfect for you! ",
      text2:
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like these was to master positioning and styling. Technologies used to build this are: HTML and CSS.",
    },
    githubLink: "https://github.com/nik-ves/natours",
    previewLink: "https://nik-ves.github.io/natours/",
    imgPath: "/images/natours-project.png",
  },
  {
    id: "trillo",
    name: "Trillo Landing Page",
    description: {
      text1:
        "If you need help booking a hotel or renting a car, Trillo is made for you.",
      text2:
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like these was to master positioning and styling. Technologies used to build this are: HTML, CSS and SCSS.",
    },
    githubLink: "https://github.com/nik-ves/trillo",
    previewLink: "https://nik-ves.github.io/trillo/",
    imgPath: "/images/trillo-project.png",
  },
  {
    id: "nexter",
    name: "Nexter Landing Page",
    description: {
      text1: "Finding a new house is hard and Nexter is here to help you out.",
      text2:
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like these was to master positioning and styling. Technologies used to build this are: HTML, CSS and SCSS.",
    },
    githubLink: "https://github.com/nik-ves/nexter",
    previewLink: "https://nik-ves.github.io/nexter/",
    imgPath: "/images/nexter-project.png",
  },
  {
    id: "web-challenges",
    name: "Web Challenges",
    description: {
      text1:
        "Finished landing page solutions from challenge websites, such as Frontend Mentor and Codewell.",
      text2:
        "What are Frontend Mentor and Codewell? Easiest way to explain is to take a quote from the Frontend Mentor: `Gain real experience of building websites and providing code reviews. Build your portfolio and help others achieve their goals.`",
    },
    githubLink: "https://github.com/nik-ves/web-challenges",
    previewLink: "https://fm-nik-ves.netlify.app",
    imgPath: "/images/web-challenges.png",
  },
  {
    id: "monster-killer-game",
    name: "Monster Killer Game",
    description: {
      text1:
        "Small browser game with a goal of killing the monster before it kills you.",
      text2:
        "My first game made with JavaScript. Goal is to kill the monster with normal and strong attacks, player can heal himself if necessary and has one extra life. Log of the battle can be seen in the console of the browser.",
    },
    githubLink: "https://github.com/nik-ves/monster-killer-game",
    previewLink: "https://nik-ves.github.io/monster-killer-game/",
    imgPath: "/images/monster-killer-project.png",
  },
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    description: {
      text1:
        "Rock, Paper, Scissors game which everyone knows. Currently this vesion is only played in the console but will try to updated it when i can.",
      text2:
        "Rules: Rock beats Scissors, Paper beats Rock and Scissors beat Paper.",
    },
    githubLink: "https://github.com/nik-ves/rock-paper-scissors",
    previewLink: "https://nik-ves.github.io/rock-paper-scissors/",
    imgPath: "/images/rock-paper-scissors-project.png",
  },
  {
    id: "calculator",
    name: "Calculator",
    description: {
      text1: "A simple calculator with the basic arithmetic operations.",
      text2:
        "My first project built with JavaScript. This calculator will probably not be the only one I make as I learn more.",
    },
    githubLink: "https://github.com/nik-ves/calculator",
    previewLink: "https://nik-ves.github.io/calculator/",
    imgPath: "/images/calculator-project.png",
  },
  {
    id: "github-profile-search",
    name: "Github Profile Search",
    description: {
      text1: "Enter your GitHub username and see your profile simplified.",
      text2: "More advanced JavaScript project, got the idea from OctoProfile.",
    },
    githubLink: "https://github.com/nik-ves/github-profile-search",
    previewLink: "https://nik-ves.github.io/github-profile-search/",
    imgPath: "/images/github-profile-project.png",
  },
  {
    id: "pig-game",
    name: "Pig Game",
    description: {
      text1: "Pig game made with vanilla JavaScript.",
      text2:
        "Rules: Game starts with player one rolling the dice. His current score is saved until he either hits 1 with the dice, in which case current score will be set to 0 and player two will start playing, or chooses to hold the current score where the score is saved and player two starts playing. Same rules apply to both players. Player that hits 100 score first wins!",
    },
    githubLink: "https://github.com/nik-ves/pig-game",
    previewLink: "https://nik-ves.github.io/pig-game/",
    imgPath: "/images/pig-game-project.png",
  },
  {
    id: "guess-my-number",
    name: "Guess My Number",
    description: {
      text1:
        "Game of guessing a hidden number with limited tries made with vanilla JavaScript.",
      text2:
        "Hidden number has a value between 1 and 20 and the earliest guess brings the highest score.",
    },
    githubLink: "https://github.com/nik-ves/guess-my-number",
    previewLink: "https://nik-ves.github.io/guess-my-number/",
    imgPath: "/images/guess-my-number-project.png",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker App",
    description: {
      text1: "Tracker expense app made with React.js.",
      text2:
        "First React.js project built by me.",
    },
    githubLink: "https://github.com/nik-ves/expense-tracker-app",
    previewLink: "https://expense-tracker-nik-ves.netlify.app",
    imgPath: "/images/expense-tracker-project.png",
  },
  {
    id: "user-listing",
    name: "User Listing App",
    description: {
      text1:
        "Basic users listing app made with React.js with some form validation.",
      text2:
        "",
    },
    githubLink: "https://github.com/nik-ves/users-listing-app",
    previewLink: "https://users-listing-nik-ves.netlify.app",
    imgPath: "/images/user-listing-project.png",
  },
  {
    id: "food-order",
    name: "Food Order App",
    description: {
      text1:
        "Food ordering app made with React.js which is connected with Firebase database. Includes a simple form validation.",
      text2:
        "",
    },
    githubLink: "https://github.com/nik-ves/natours",
    previewLink: "https://order-food-nik-ves.netlify.app",
    imgPath: "/images/food-order-project.png",
  },
  {
    id: "form-validator",
    name: "Form Validator",
    description: {
      text1:
        "Validate user input with this app made with React.js. After submiting, user information will be shown in the console.",
      text2:
        "",
    },
    githubLink: "https://github.com/nik-ves/form-validation-app",
    previewLink: "https://form-validation-nik-ves.netlify.app",
    imgPath: "/images/form-validation-project.png",
  },
  {
    id: "todo-app",
    name: "Todo App",
    description: {
      text1: "Classic todo app made with React.js. - WIP",
      text2:
        "",
    },
    githubLink: "https://github.com/nik-ves/todo-app",
    previewLink: "https://nik-ves.github.io/natours/",
    imgPath: "/images/omnifood-project.png",
  },
];

export default PROJECTS;
