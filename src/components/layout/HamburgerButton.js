import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const IconBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
`;

const IconBoxFixed = styled.div`
  cursor: pointer;
  z-index: 100;
  position: fixed;
  top: 1;
  right: 0;
  margin: 2rem;
`;

const Icon = styled(GiHamburgerMenu)`
  display: none;
  z-index: 1000;
  color: #dc843a;

  @media only screen and (max-width: 550px) {
    display: block;
  }
`;

const HamburgerButton = ({ showMenu, setShowMenu }) => {
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu) {
    return (
      <IconBoxFixed>
        <Icon size={24} onClick={showMenuHandler} />
      </IconBoxFixed>
    );
  }

  return (
    <IconBox>
      <Icon size={24} onClick={showMenuHandler} />
    </IconBox>
  );
};

export default HamburgerButton;
