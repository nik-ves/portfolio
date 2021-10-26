import { GiHamburgerMenu } from "react-icons/gi";

import classes from "./HamburgerButton.module.css";

const HamburgerButton = ({ showMenu, setShowMenu }) => {
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  let hamburgerClasses;

  if (showMenu) {
    hamburgerClasses = "hamburger-menu-icon-fixed";
  } else {
    hamburgerClasses = "hamburger-menu-icon";
  }

  return (
    <div className={hamburgerClasses}>
      <GiHamburgerMenu
        className={classes.icon}
        size={24}
        onClick={showMenuHandler}
      />
    </div>
  );
};

export default HamburgerButton;
