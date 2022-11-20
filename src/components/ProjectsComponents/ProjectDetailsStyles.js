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
  line-height: 3.5rem;

  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
    line-height: 3rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageSlider = styled(Carousel)`
  border: 3px solid #dc843a;
`;

export const Code = styled.code`
  display: inline-block;
  border: 3px solid #dc843a;
  font-size: 1.8rem;
  padding: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  font-size: 2.8rem;
  color: #dc843a;
  transition: all 0.2s;
  margin: 1rem;

  @media only screen and (max-width: 850px) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 1.8rem;
  }

  &:hover {
    color: white;
  }
`;
