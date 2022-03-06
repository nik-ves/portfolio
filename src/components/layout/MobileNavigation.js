import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import CSSTransition from "react-transition-group/CSSTransition";

import {
  Navigation,
  NavigationLink,
  SocialLinks,
} from "./MobileNavigationStyles";

import * as Line from "../UI/Lines";

const MobileNavigation = ({ showMenu, setShowMenu }) => {
  const links = {
    github: "https://github.com/nik-ves",
    instagram: "https://www.instagram.com/dzonigram",
    linkedin: "https://www.linkedin.com/in/nikves",
  };

  const setFalse = () => {
    setShowMenu(false);
  };

  return (
    <CSSTransition
      in={showMenu}
      timeout={400}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: "hamburger-open",
        exitActive: "hamburger-close",
      }}
    >
      <Navigation>
        <ul>
          <li>
            <NavigationLink
              onClick={setFalse}
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              onClick={setFalse}
              to="/projects"
              activeClassName="active"
            >
              Projects
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              onClick={setFalse}
              to="/contact"
              exact
              activeClassName="active"
            >
              Contact
            </NavigationLink>
          </li>
          <li>
            {/* <HorizontalLine /> */}
            <Line.Horizontal />
          </li>
          <SocialLinks>
            <li>
              <a href={links.github} target="_blank" rel="noreferrer">
                <FiGithub size={22} />
              </a>
            </li>
            <li>
              <a href={links.instagram} target="_blank" rel="noreferrer">
                <FiInstagram size={22} />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin size={22} />
              </a>
            </li>
          </SocialLinks>
        </ul>
      </Navigation>
    </CSSTransition>
  );
};

export default MobileNavigation;
