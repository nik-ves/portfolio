import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const openHamburger = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const closeHamburger = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const Navigation = styled.nav`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2.5rem;
  color: white;
  list-style-type: none;
  min-height: 10rem;
  min-width: 100vw;
  background: rgb(43, 43, 43);
  background: linear-gradient(
    180deg,
    rgba(43, 43, 43, 1) 0%,
    rgba(26, 30, 34, 1) 100%
  );
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 3;

  &.hamburger-open {
    animation: ${openHamburger} 0.4s ease-out forwards;
  }

  &.hamburger-close {
    animation: ${closeHamburger} 0.4s ease-out forwards;
  }

  & ul {
    list-style-type: none;
    text-align: center;
  }

  & li {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 550px) {
    display: none;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: white;

  &.active {
    border-bottom: 3px solid white;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  list-style-type: none;
  width: 200px;
  justify-content: space-between;
  align-items: center;

  & a {
    color: white;
    text-decoration: none;
  }
`;
