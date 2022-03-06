import styled from "styled-components";
import { css } from "styled-components";

export const Vertical = styled.span`
  display: block;
  height: 3rem;
  border-right: 1px solid #fff;
`;

export const Horizontal = styled.span`
  display: block;
  width: 20rem;
  border-bottom: 2px solid #dc843a;
  margin: 0 auto;

  ${(props) =>
    props.big &&
    css`
      margin: 2rem auto;
      width: 90%;
    `}
`;
