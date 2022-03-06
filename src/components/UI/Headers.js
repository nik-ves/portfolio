import styled from "styled-components";
import { css } from "styled-components";

export const Primary = styled.h1`
  margin-bottom: 1rem;
  font-size: 4rem;
  color: #fff;

  @media only screen and (max-width: 750px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
`;

// FORMA H2
export const Secondary = styled.h2`
  font-size: 3rem;
  color: #dc843a;
  display: inline-block;
  border-bottom: 3px solid #dc843a;
  margin-bottom: 1rem;

  ${(props) =>
    props.Title &&
    css`
      color: white;
      margin: 1.5rem 0 0 0;
      border: none;
      display: flex;
      justify-content: center;
    `}

  @media only screen and (max-width: 850px) {
    font-size: 2.5rem;
  }
`;

export const Tertiary = styled.h3`
  font-size: 2rem;
  color: #fff;

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 3rem;
    `}

  @media only screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;
