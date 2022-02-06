import classes from "./Footer.module.css";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <p>{new Date().getFullYear()} © Nikola Veselinović</p>
      </Container>
    </footer>
  );
};

export default Footer;
