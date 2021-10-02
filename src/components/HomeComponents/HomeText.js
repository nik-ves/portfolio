import classes from "./HomeText.module.css";

const HomeText = () => {
  const links = {
    github: "https://github.com/nik-ves",
    instagram: "https://www.instagram.com/dzonigram/",
    linkedin: "https://www.linkedin.com/in/nikola-veselinovi%C4%87-0a87741ba/",
    mail: "mailto:nik-ves@hotmail.com",
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes["text-box"]}>
        <h1 className={classes.name}>Nikola Veselinović</h1>

        <p className={classes.text}>
          Hello, my name is Nikola Veselinović, fourth year student at
          Singidunum University located in Belgrade, Serbia.
        </p>
        <br />

        <p className={classes.text}>
          Dreaming up ideas and making them come true is where my passion lies.
          <br />I have challenged myself to try to make at least 1 new project a
          week. Currently my projects consist of landing pages, JavaScript games
          and React apps but in the future i would like to broaden my stack.
        </p>

        <p className={classes.text}>
          You can find my full projects list{" "}
          <a href={links.github} target="_blank">
            here
          </a>
          .
        </p>
        <br />

        <p className={classes.text}>
          {/* Outside of coding and programming, I enjoy listening to music and
          traveling. Some of my photos can be found on Instagram. If you
          happened to be in the same city I live (currently in Wenzhou), maybe
          we can hang out and take some photos or code together. */}
          When i'm not studying I like to spend my free time by playing pool,
          going to the arcade or just listening to music.
        </p>

        <hr className={classes["horizontal-line"]} />

        <p className={classes.text}>
          Find me on <a href={links.github}>GitHub</a>, {" "}
          <a href={links.instagram}>Instagram</a>, {" "}
          <a href={links.linkedin}>LinkedIn</a>, or mail me at {" "}
          <a href={links.mail}>nik-ves@hotmail.com</a>.
        </p>
        <br />

        <p className={classes.text}>Hope you like what you find here!</p>
      </div>
    </div>
  );
};

export default HomeText;
