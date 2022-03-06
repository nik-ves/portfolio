import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import {
  Navigation,
  SocialLink,
  NavigationLink,
} from "./DesktopNavigationStyles";

import * as Line from "../UI/Lines";

const DesktopNavigation = () => {
  const links = {
    github: "https://github.com/nik-ves",
    instagram: "https://www.instagram.com/dzonigram",
    linkedin: "https://www.linkedin.com/in/nikves",
  };

  return (
    <Navigation>
      <ul>
        <li>
          <NavigationLink to="/" exact activeClassName="active">
            Home
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/projects" activeClassName="active">
            Projects
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/contact" exact activeClassName="active">
            Contact
          </NavigationLink>
        </li>
        <li>
          <Line.Vertical />
        </li>
        <li>
          <SocialLink href={links.github} target="_blank" rel="noreferrer">
            <FiGithub />
          </SocialLink>
        </li>
        <li>
          <SocialLink href={links.instagram} target="_blank" rel="noreferrer">
            <FiInstagram />
          </SocialLink>
        </li>
        <li>
          <SocialLink href={links.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
          </SocialLink>
        </li>
      </ul>
    </Navigation>
  );
};

export default DesktopNavigation;
