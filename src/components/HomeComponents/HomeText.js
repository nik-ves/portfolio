import classes from "./HomeText.module.css";

const HomeText = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes["text-box"]}>
        <h1 className={classes.name}>Nikola Veselinović</h1>

        <p className={classes.text}>
          Hello, my name is Nikola Veselinović, fourth year student at Singidunum
          University located in Belgrade, Serbia.
        </p>
        <br />

        <p className={classes.text}>
          Dreaming up ideas and making them come true is where my passion lies.

          <br />
          I have challenged myself to try to make at least 1 new project a week. Currently my projects consist of landing pages, JavaScript games and React apps but in the future i would like to broaden my stack.
        </p>

        <p className={classes.text}>You can find my full projects list <a href="https://github.com/nik-ves" target="_blank">here</a>.</p>
        <br />

        <p className={classes.text}>
          Outside of coding and programming, I enjoy listening to music and traveling. Some
          of my photos can be found on Instagram. If you happened to be in the
          same city I live (currently in Wenzhou), maybe we can hang out and
          take some photos or code together.
        </p>

        <hr
          style={{
            color: "#fff",
            backgroundColor: "#fff",
            height: 0.5,
            borderColor: "#fff",
            margin: 20,
          }}
        />

        <p className={classes.text}>
          Find me on <a href="">GitHub</a>, <a href="">Instagram</a> or <a href="">LinkedIn</a>, mail me at <a href="mailto:nik-ves@hotmail.com">nik-ves@hotmail.com</a>.
        </p>
        <br />

        <p className={classes.text}>
          Hope you like what you find here!
        </p>
      </div>
    </div>
  );
};

export default HomeText;