const PROJECTS = [
  {
    id: 1,
    name: "github-profile-search",
    description: "Enter your GitHub username and see your profile simplified.",
    about: {
      text1:
        "Github Profile Search project is a web app that allows you to see your GitHub profile simplified.",
      text2:
        "Idea was gotten from Twitter when I found out about the similar app called OctoProfile. OctoProfile gives you a nicer look at your Github profile with some charts.",
    },
    howItWorks: {
      text1:
        "When you open the app, you will see an input field in which you need to enter a GitHub username. After you enter the username, the app will check if it exists and if it doesn't, user will get that message back.",
      text2:
        "When the app finds the selected user it will show the basic data of profile and some repositories. Basic data consists of stuff like number of repositories, account created date, location, followers, following, etc.",
      text3:
        "Below the basic data, cards of each repository will be shown. Color of the card will be according to the language that was used the most in that project. Clicking on one of the cards will take you to it's GitHub repository.",
    },
    installation: {
      text1: "installation",
    },
    githubLink: "https://github.com/nik-ves/github-profile-search",
    previewLink: "https://github-profile-search-nik-ves.netlify.app/",
    images: {
      img1: "/images/gps1.png",
      img2: "/images/gps2.png",
    },
  },
  {
    id: 2,
    name: "virtual-museum",
    description:
      "Virtual Museum application that enables it's authenticated users to browse through history.",
    about: {
      text1:
        "This project was for a third year college subject where the goal was to create an online museum.",
      text2:
        "Virtual Museum is a web app that enables it's authenticated users to browse through history and see exibits.",
    },
    howItWorks: {
      text1:
        "First time you open this app, you will be on the home page. If you scroll down a bit you will get a taste of that you can see if you create an account or if you just sign in. ",
      text2:
        "When you sign in or sign up you will be able to use the app to the fullest. Some of the things you can do is see all of the settings, and each setting exhibit, modify your profile, comment on settings and exhibits, create your own tours etc...",
      text3:
        "Each of the settings and exhibits are represented by image and lengthy description which was taken from Wikipedia.",
    },
    installation: {
      text1: "installation",
    },
    githubLink: "https://github.com/nik-ves/virtual-museum-app",
    previewLink: "https://museum-nik-ves.netlify.app",
    images: {
      img1: "/images/museum1.png",
      img2: "/images/museum2.png",
      img3: "/images/museum3.png",
      img4: "/images/museum4.png",
      img5: "/images/museum5.png",
      img6: "/images/museum6.png",
      img7: "/images/museum7.png",
      img8: "/images/museum8.png",
      img9: "/images/museum9.png",
      img10: "/images/museum10.png",
    },
  },
  {
    id: 3,
    name: "itidaru",
    description:
      "Itidaru is a personalized todo app. Create an account to make your own todo list which will be waiting you next time you log in.",
    about: {
      text1:
        "Itidaru represents a more complex project which connects frontend and backend. I was always interested in doing combination of both and this project was perfect for it. Not too difficult to create but covers all bases.",
    },
    howItWorks: {
      text1:
        "When you open the app, you will be greeted by the description of the app. You can create your todo items and save them to the server but only if you create an account and log in.",
      text2:
        "To create an account you need to meet some requirements that Firebase set. If some of the information is not correct, like not valid e-mail or password is too short, a message will be shown to the user so he knows what to fix.",
      text3:
        "After you sign in, you can start creating the todos. Edit and delete them whenever you feel like it. App supports dark and light color themes, which you can change by clicking the moon or the sun icon in the navigation.",
    },
    installation: {
      text1: "installation",
    },
    githubLink: "https://github.com/nik-ves/itidaru-web",
    previewLink: "https://itidaru.netlify.app/my-todos",
    images: {
      img1: "/images/itidaru1.png",
      img2: "/images/itidaru2.png",
      img3: "/images/itidaru3.png",
      img4: "/images/itidaru4.png",
      img5: "/images/itidaru5.png",
      img6: "/images/itidaru6.png",
      img7: "/images/itidaru7.png",
    },
  },
];

export default PROJECTS;
