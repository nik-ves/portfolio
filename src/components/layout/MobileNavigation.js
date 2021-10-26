import { NavLink } from "react-router-dom";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = ({ setShowMenu }) => {
  const links = {
    github: "https://github.com/nik-ves",
    instagram: "https://www.instagram.com/dzonigram",
    linkedin: "https://www.linkedin.com/in/nikves",
  };

  const setFalse = () => {
    setShowMenu(false);
  };

  return (
    <div className={classes["hamburger-nav"]}>
      <ul className={classes["hamburger-menu"]}>
        <li>
          <NavLink
            onClick={setFalse}
            to="/"
            exact
            activeClassName={classes.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={setFalse}
            to="/projects"
            exact
            activeClassName={classes.active}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={setFalse}
            to="/contact"
            exact
            activeClassName={classes.active}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <span className={classes["line-horizontal"]}></span>
        </li>
        <ul className={classes["hamburger-socials"]}>
          <li>
            <a
              className={classes.socials}
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={22} className={classes.socials} />
            </a>
          </li>
          <li>
            <a
              className={classes.socials}
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram size={22} className={classes.socials} />
            </a>
          </li>
          <li>
            <a
              className={classes.socials}
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={22} className={classes.socials} />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default MobileNavigation;
