import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-top: 2rem;

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }

  & a {
    display: flex;
    color: #dc843a;
    margin: 0 5rem;
    transition: all 0.2s;

    @media only screen and (max-width: 550px) {
      margin: 0 2rem;
    }
  }

  & a:hover {
    color: #fff;
  }
`;

export const ShowAll = styled.p`
  display: none;

  @media only screen and (max-width: 550px) {
    display: block;
  }
`;
