const PROJECTS = [
  {
    id: 1,
    name: "omnifood",
    type: "Landing page",
    shortDescription:
      "Omnifood is a company which makes and delivers healthy food to your doorstep.",
    longDescription: {
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
    id: 2,
    name: "natours",
    type: "Landing page",
    shortDescription:
      "Want to explore the wilds but don't know how? Then Natours is perfect for you!",
    longDescription: {
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
    id: 3,
    name: "trillo",
    type: "Landing page",
    shortDescription:
      "If you need help booking a hotel or renting a car, Trillo is made for you.",
    longDescription: {
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
    id: 4,
    name: "nexter",
    type: "Landing page",
    shortDescription:
      "Finding a new house is hard and Nexter is here to help you out.",
    longDescription: {
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
    id: 5,
    name: "web-challenges",
    type: "Landing page",
    shortDescription:
      "Solutions from landing page challenge websites such as Frontend-Mentor and Codewell.",
    longDescription: {
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
    id: 6,
    name: "monster-killer-game",
    type: "Javascript",
    shortDescription:
      "Small browser game with a goal of killing the monster before it kills you.",
    longDescription: {
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
    id: 7,
    name: "rock-paper-scissors",
    type: "Javascript",
    shortDescription:
      "Basic rock, paper, scissors game. Result shown in the console.",
    longDescription: {
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
    id: 8,
    name: "calculator",
    type: "Javascript",
    shortDescription:
      "A simple calculator with the basic arithmetic operations.",
    longDescription: {
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
    id: 9,
    name: "github-profile-search",
    type: "Javascript",
    shortDescription: "See your GitHub profile simplified.",
    longDescription: {
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
    id: 10,
    name: "pig-game",
    type: "Javascript",
    shortDescription: "Whoever hits 100 score first is a winner!",
    longDescription: {
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
    id: 11,
    name: "guess-my-number",
    type: "Javascript",
    shortDescription:
      "Guess a number game. Secret number is logged in the console for an easy win.",
    longDescription: {
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
    id: 12,
    name: "expense-tracker",
    type: "React",
    shortDescription:
      "Tracker expense app made with React.js. Includes a year filter.",
    longDescription: {
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
    id: 13,
    name: "user-listing",
    type: "React",
    shortDescription:
      "Basic users listing app made with React.js with some form validation.",
    longDescription: {
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
    id: 14,
    name: "virtual-museum",
    type: "React",
    shortDescription:
      "Virtual Museum application that enables its authenticated users to browse through history.",
    longDescription: {
      text1: "Virtual Museum",
      text2:
        "Virtual Museum application that enables its authenticated users to browse through history.",
      text3:
        "Some of the features this app includes are user authentication, form validaton, custom tour maker and editor, profile details and editor...",
      text4: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/virtual-museum-app",
    previewLink: "https://museum-nik-ves.netlify.app",
    imgPath: "/images/virtual-museum.png",
  },
  {
    id: 15,
    name: "form-validator",
    type: "React",
    shortDescription:
      "Validate user input with this. After submiting, user information will be shown in the console.",
    longDescription: {
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
    id: 16,
    name: "personalized-todo-app",
    type: "React",
    shortDescription: "Personalized Todo application.",
    longDescription: {
      text1: "Personalized Todo App",
      text2:
        "To see or make todos, you need to sign up, or sign in if you already have an account. After authentication, you can start making your todos. Each todo will be saved on Firebase server and your todos will be waiting you next time you log in.",
      text3: "Made with React.js.",
    },
    githubLink: "https://github.com/nik-ves/personalized-todo-app",
    previewLink: "https://todo-nik-ves.netlify.app",
    imgPath: "/images/todo.png",
  },
];

export default PROJECTS;
