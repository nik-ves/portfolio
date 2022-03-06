import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5rem 0;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
  object-fit: cover;

  @media only screen and (max-width: 550px) {
    margin: 3rem 0;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;

  & img {
    border: 3px solid #dc843a;
    height: 50rem;
    width: 80rem;
    object-fit: cover;

    @media only screen and (max-width: 850px) {
      max-width: 100%;
    }

    @media only screen and (max-width: 550px) {
      height: 30rem;
      max-width: 100%;
    }
  }
`;

export const EnlargedImageBox = styled.div`
  z-index: 300;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10rem 0;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (max-width: 550px) {
    padding-top: 10rem;
  }

  & img {
    border: 3px solid #dc843a;
    width: 70%;
    height: 100%;

    @media only screen and (max-width: 550px) {
      width: 90%;
    }
  }
`;

export const PictureText = styled.p`
  font-size: 1.3rem;
  color: grey;
  font-style: italic;
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 850px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const InfoBox = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  margin: 5rem 0;

  @media only screen and (max-width: 550px) {
    margin: 3rem 0;
  }
`;

export const Description = styled.p`
  color: grey;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;

  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const Links = styled.p`
  color: grey;
  margin-top: 2rem;
  line-height: 2.5rem;
  font-size: 1.8rem;

  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }

  & a {
    font-size: 1.8rem;
    color: #dc843a;

    @media only screen and (max-width: 850px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
  }

  & a:hover {
    border-bottom: 2px solid #dc843a;
  }
`;
