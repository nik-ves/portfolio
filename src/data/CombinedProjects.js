const PROJECTS = [
  {
    id: "omnifood",
    name: "Omnifood Landing Page",
    description: {
      text1:
        "Omnifood is a fictional company which makes and delivers healthy food to your doorstep.",
      text2:
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like these was to practice positioning and styling without using Flex or Grid. This was the first time that I had an encounter with JavaScript at all so in the beginning I had a hard time but managed in the end.",
      text3:
        "Practiced with some animations in this project like sticky navigation bar, sliding in phone image, slowly appearing locations and popping up price cards. First 'real' project that showed my a glimpse of what JavaScript can do.",
      text4: "Made with HTML, CSS and jQuery.",
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
        "Want to explore the wilds but don't know how? Then Natours is perfect for you!",
      text2:
        "This project was designed by Jonas Schmedtmann and made by me. Challenge in this project was to make it without the use of JavaScript and to practice animations on elements.",
      text3:
        "Said animations are popping up button, hamburger CSS navigation, hover animations on images, 360° rotating cards.",
      text4: "Made with HTML and CSS.",
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
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like this was to practice using CSS Flex property and get used to SCSS. After this project, I liked SCSS so much that it became a must for me.",
      text3: "Made with HTML, CSS and SCSS.",
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
        "This project was designed by Jonas Schmedtmann and made by me. Goal of projects like this was to practice SCSS and CSS Grid property. After this project i haven't used CSS Grid much, just liked CSS Flex more.",
      text3: "Made with HTML, CSS and SCSS.",
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
      text3:
        "This project consists of 20+ smaller single landing pages. Will make more as practice.",
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
        "Just like the name suggests. You have to kill the monster before it kills you. This was my first JavaScript game ever made. Didn't go too much into the styling as functionality was more important to me. It's a very simple game, player has options to use normal and strong attacks, heal if necessary and has one extra life. Extra life negates the monster's killing blow.",
      text3: "Made with vanilla JavaScript.",
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
        "Rock, Paper, Scissors game which everyone knows. Currently this vesion is only played in the console. Goal of this project was to practice functionality and logic.",
      text2:
        "Rules: Rock beats Scissors, Paper beats Rock and Scissors beat Paper.",
      text3: "Made with vanilla JavaScript.",
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
        "My first project built with JavaScript. As this was the first calculator that I ever made, i'm gonna come back and upgrade it.",
      text3: "Made with vanilla JavaScript.",
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
      text2:
        "Got the project idea from Twitter and tried to make it myself. Never before have I worked with fetch but managed to make it. Includes a back button when you're finished with the serach and also the ligth and dark mode switcher. Currently this project is limited to return only 30 projects on search.",
      text3: "Made with vanilla JavaScript.",
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
        "First project with styling and scripting. This is a project from course made by Jonas Schmedtmann on Udemy. Goal of this project was to practice manipulation of DOM.",
      text3:
        "Rules: Game starts with player one rolling the dice. His current score is saved until he either hits 1 with the dice, in which case current score will be set to 0 and player two will start playing, or chooses to hold the current score where the score is saved and player two starts playing. Same rules apply to both players. Player that hits 100 score first wins!",
      text4: "Made with vanilla JavaScript.",
    },
    githubLink: "https://github.com/nik-ves/pig-game",
    previewLink: "https://nik-ves.github.io/pig-game/",
    imgPath: "/images/pig-game-project.png",
  },
  {
    id: "guess-my-number",
    name: "Guess My Number",
    description: {
      text1: "Game of guessing a hidden number with limited tries.",
      text2:
        "Goal of the game is to guess the hidden number before you run out of tries. Hidden number has a value between 1 and 20 and the earliest guess brings the highest score. If you want an easy win, hidden number is logged into the console.",
      text3: "Made with vanilla JavaScript.",
    },
    githubLink: "https://github.com/nik-ves/guess-my-number",
    previewLink: "https://nik-ves.github.io/guess-my-number/",
    imgPath: "/images/guess-my-number-project.png",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker App",
    description: {
      text1: "Tracker expense app",
      text2:
        "This would be my first React.js project made and is one of the project from Udemy course designed by Maximilian Schwarzmüller. Includes adding your expenses by a year, which you can filter through. Also includes a graph which show you your expenses by months.",
      text3: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/expense-tracker-app",
    previewLink: "https://expense-tracker-nik-ves.netlify.app",
    imgPath: "/images/expense-tracker-project.png",
  },
  {
    id: "user-listing",
    name: "User Listing App",
    description: {
      text1: "App for listing users.",
      text2:
        "Basic app which enables you to list users with this form. Submitting users name and age will add them bellow for you to see. Before you can submit you have to go through a small form validation which does not allow submitting empty values.",
      text3: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/users-listing-app",
    previewLink: "https://users-listing-nik-ves.netlify.app",
    imgPath: "/images/user-listing-project.png",
  },
  {
    id: "food-order",
    name: "Food Order App",
    description: {
      text1: "Food ordering app",
      text2:
        "Currently my most complex project built, also one of the projects from Udemy course designed by Maximilian Schwarzmüller. This app is connected to a firebase database. After you select your food and amount, you can submit the data from the cart to the database.",
      text3: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/natours",
    previewLink: "https://order-food-nik-ves.netlify.app",
    imgPath: "/images/food-order-project.png",
  },
  {
    id: "form-validator",
    name: "Form Validator",
    description: {
      text1: "Form validator.",
      text2:
        "Goal of this app was to practice validation of the form as the name suggests. Form is made of four input fields. After you submit your data, if the form allows you, you can see your submited data in the console.",
      text3: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/form-validation-app",
    previewLink: "https://form-validation-nik-ves.netlify.app",
    imgPath: "/images/form-validation-project.png",
  },
  {
    id: "todo-app",
    name: "Todo App",
    description: {
      text1: "Todo App",
      text2: "Currently work in progress!",
      text3: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/todo-app",
    previewLink: "https://nik-ves.github.io/natours/",
    imgPath: "/images/omnifood-project.png",
  },
];

export default PROJECTS;
