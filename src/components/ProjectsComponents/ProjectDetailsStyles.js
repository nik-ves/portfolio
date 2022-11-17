import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Wrapper = styled.section`
  margin: 5rem 0;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
  object-fit: cover;

  @media only screen and (max-width: 550px) {
    margin: 3rem 0;
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

export const ImageSlider = styled(Carousel)`
  border: 3px solid #dc843a;
`;
