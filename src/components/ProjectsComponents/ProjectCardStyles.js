import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: inline-block;
  height: 13rem;
  width: 100%;
  background-color: transparent;
  margin: 1rem 0;
  transition: all 0.3s;
  border: 1px solid white;
  overflow: hidden;

  @media only screen and (max-width: 550px) {
    height: 10rem;
  }

  &:hover {
    background-color: #dc843a;
    scale: 1.03;
  }
`;

export const ProjectInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s;
`;

export const ProjectName = styled.p`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 600;
  color: white;

  @media only screen and (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

export const ProjectDescription = styled.p`
  color: #cccccc;
  font-size: 1.8rem;
  padding: 0 1rem;
  text-align: center;
  color: white;

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;
