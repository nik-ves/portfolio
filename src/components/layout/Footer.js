import classes from "./Footer.module.css";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <header className={classes.header}>
      <Container>
        <p>2021 © Nikola Veselinović</p>
      </Container>
    </header>
  );
};

export default Footer;
