import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  color: grey;
  margin: 5rem 0;
  max-width: 65rem;
  padding: 2rem;

  @media only screen and (max-width: 550px) {
    margin: 1rem 0;
    padding: 2rem 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 3.5rem;

  & a {
    color: #dc843a;
  }

  & a:hover {
    border-bottom: 2px solid #dc843a;
  }

  @media only screen and (max-width: 750px) {
    font-size: 1.5rem;
    line-height: 3rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;
