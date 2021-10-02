import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import classes from "./MainNavigation.module.css";

import Container from "./UI/Container";
import { useState } from "react";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const setFalse = () => {
    setShowMenu(false);
  };

  let hamburgerMenu;

  if (showMenu) {
    hamburgerMenu = (
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
          <ul className={classes['hamburger-socials']}>
            <li>
              <a
                className={classes.test}
                href="https://github.com/nik-ves"
                target="_blank"
              >
                <FiGithub size={22} className={classes.socials} />
              </a>
            </li>
            <li>
              <a
                className={classes.test}
                href="https://www.instagram.com/dzonigram/"
                target="_blank"
              >
                <FiInstagram size={22} className={classes.socials} />
              </a>
            </li>
            <li>
              <a
                className={classes.test}
                href="https://www.linkedin.com/in/nikola-veselinovi%C4%87-0a87741ba/"
                target="_blank"
              >
                <FiLinkedin size={22} className={classes.socials} />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    );
  }

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.content}>
          <div className={classes["logo-box"]}>
            <Link to="/">nikves</Link>
          </div>

          <a href="#" className={classes.hamburger}>
            <GiHamburgerMenu
              className={classes.icon}
              size={24}
              onClick={showMenuHandler}
            />
          </a>

          <nav id="nav" className={classes.nav}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName={classes.active}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" exact activeClassName={classes.active}>
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
                  className={classes.test}
                  href="https://github.com/nik-ves"
                  target="_blank"
                >
                  <FiGithub size={22} className={classes.socials} />
                </a>
              </li>
              <li>
                <a
                  className={classes.test}
                  href="https://www.instagram.com/dzonigram/"
                  target="_blank"
                >
                  <FiInstagram size={22} className={classes.socials} />
                </a>
              </li>
              <li>
                <a
                  className={classes.test}
                  href="https://www.linkedin.com/in/nikola-veselinovi%C4%87-0a87741ba/"
                  target="_blank"
                >
                  <FiLinkedin size={22} className={classes.socials} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {hamburgerMenu}
      </Container>
    </header>
  );
};

export default MainNavigation;