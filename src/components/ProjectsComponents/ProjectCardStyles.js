import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: inline-block;
  height: 10rem;
  width: 49%;
  background-color: transparent;
  margin: 1rem 0;
  transition: all 0.3s;
  border: 1px solid white;
  overflow: hidden;

  &:hover {
    background-color: #dc843a;
  }

  &:hover p {
    color: black;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const ProjectInfo = styled.div`
  padding: 0.5rem 1rem;
`;

export const ProjectName = styled.p`
  display: inline-block;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: white;
`;

export const ProjectDescription = styled.p`
  color: #cccccc;
  font-size: 1.3rem;
`;
