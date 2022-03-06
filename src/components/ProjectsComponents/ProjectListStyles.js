import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 65rem;
  margin: 5rem auto;

  @media only screen and (max-width: 550px) {
    margin-top: 1.5rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  color: grey;
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4rem;
  line-height: 2.5rem;

  & a {
    color: #dc843a;
  }

  & a:hover {
    border-bottom: 2px solid #dc843a;
  }

  @media only screen and (max-width: 750px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;
