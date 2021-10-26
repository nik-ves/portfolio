import classes from "./Footer.module.css";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <p>2021 © Nikola Veselinović</p>
      </Container>
    </footer>
  );
};

export default Footer;
