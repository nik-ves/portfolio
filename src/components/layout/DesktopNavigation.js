import { NavLink } from "react-router-dom";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import classes from "./DesktopNavigation.module.css";

const DesktopNavigation = () => {
  const links = {
    github: "https://github.com/nik-ves",
    instagram: "https://www.instagram.com/dzonigram",
    linkedin: "https://www.linkedin.com/in/nikves",
  };

  return (
    <div className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName={classes.active}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeClassName={classes.active}>
            Contact
          </NavLink>
        </li>
        <li>
          <span className={classes["line-vertical"]}></span>
        </li>
        <li>
          <a
            className={classes.socials}
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className={classes.socials} />
          </a>
        </li>
        <li>
          <a
            className={classes.socials}
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className={classes.socials} />
          </a>
        </li>
        <li>
          <a
            className={classes.socials}
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className={classes.socials} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
