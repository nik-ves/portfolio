import styled from "styled-components";

export const Name = styled.h1`
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
  line-height: 3rem;

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

export const HorizontalLine = styled.hr`
  height: 0.1rem;
  border-color: #dc843a;
  margin: 2rem;
`;
