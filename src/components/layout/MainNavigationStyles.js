import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 1.5rem 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  & a {
    font-size: 4rem;
    text-decoration: none;
    color: #dc843a;
    line-height: 6rem;
  }

  @media only screen and (max-width: 750px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 3rem;
  }
`;
