import { Link } from "react-router-dom";
import { useState } from "react";

import Container from "../UI/Container";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import HamburgerButton from "./HamburgerButton";

import { Content, Logo, Wrapper } from "./MainNavigationStyles";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo>
            <Link to="/">nikves</Link>
          </Logo>

          <HamburgerButton showMenu={showMenu} setShowMenu={setShowMenu} />

          <DesktopNavigation />
        </Content>

        <MobileNavigation showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </Wrapper>
  );
};

export default MainNavigation;
