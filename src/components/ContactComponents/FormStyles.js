import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0;

  @media only screen and (max-width: 550px) {
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const ContactForm = styled.form`
  padding: 2rem 2rem 1rem 2rem;
  font-size: 1.8rem;
  border-radius: 5px;
  color: #fff;
  border: 2px solid #dc843a;
  max-width: 45rem;
  width: 100%;

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;

  & input,
  & label {
    display: block;
  }

  & label {
    margin-bottom: 0.5rem;
  }

  & textarea {
    font: inherit;
    width: 100%;
    max-width: 45rem;
    height: 10rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }

  & input,
  & select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 45rem;
  }

  & input:focus,
  & select:focus,
  & textarea:focus {
    outline: none;
  }
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 45rem;

  @media only screen and (max-width: 550px) {
    align-self: flex-start;
  }
`;

export const Paragraph = styled.p`
  color: grey;
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 5rem;
  line-height: 2.5rem;

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

export const Button = styled.button`
  font: inherit;
  background-color: #fff;
  color: #000;
  border: 1px solid #dc843a;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dc843a;
    color: #000;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: transparent;
    color: #fff;
    border-color: #fff;
    cursor: not-allowed;
  }
`;

export const FormActions = styled.div`
  text-align: center;

  & button {
    margin-left: 1rem;
  }
`;

export const ErrorText = styled.p`
  margin-top: 0.5rem;
  color: #b40e0e;
`;

export const SuccessText = styled.p`
  margin: 0.5rem;

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;
