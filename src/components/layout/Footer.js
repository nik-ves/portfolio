import Container from "../UI/Container";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: calc(100% - 360px);
  padding: 3rem;
`;

const Paragraph = styled.p`
  color: grey;
  font-size: 1.5rem;
  text-align: center;

  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Paragraph>{new Date().getFullYear()} © Nikola Veselinović</Paragraph>
      </Container>
    </Wrapper>
  );
};

export default Footer;
