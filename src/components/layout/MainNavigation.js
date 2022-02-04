import { Link } from "react-router-dom";
import { useState } from "react";

import classes from "./MainNavigation.module.css";
import Container from "../UI/Container";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import HamburgerButton from "./HamburgerButton";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.content}>
          <div className={classes["logo-box"]}>
            <Link to="/">nikves</Link>
          </div>

          <HamburgerButton showMenu={showMenu} setShowMenu={setShowMenu} />

          <DesktopNavigation />
        </div>

        <MobileNavigation showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </header>
  );
};

export default MainNavigation;
