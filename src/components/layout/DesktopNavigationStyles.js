import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  @media only screen and (max-width: 550px) {
    display: none;
  }

  & ul {
    display: flex;
    list-style: none;
    align-items: center;
    font-size: 1.8rem;

    @media only screen and (max-width: 750px) {
      font-size: 1.4rem;
    }
  }

  & li {
    margin-left: 2rem;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #dc843a;
  transition: all 0.2s;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    border-bottom: 3px solid #fff;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  font-size: 1.8rem;
  color: #dc843a;
  transition: all 0.2s;

  &:hover {
    color: white;
  }
`;

export const VerticalLine = styled.span`
  display: block;
  height: 30px;
  border-right: 1px solid #fff;
`;
