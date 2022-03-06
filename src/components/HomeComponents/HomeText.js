import {
  Name,
  Wrapper,
  TextContainer,
  Paragraph,
  HorizontalLine,
} from "./HomeStyles";

const HomeText = () => {
  const links = {
    github: "https://github.com/nik-ves",
    instagram: "https://www.instagram.com/dzonigram/",
    linkedin: "https://www.linkedin.com/in/nikves/",
    mail: "mailto:nik-ves@hotmail.com",
  };

  return (
    <Wrapper>
      <TextContainer>
        <Name>Nikola Veselinović</Name>

        <Paragraph>
          Hello, my name is Nikola Veselinović, fourth year student at
          Singidunum University located in Belgrade, Serbia.
        </Paragraph>
        <br />

        <Paragraph>
          Dreaming up ideas and making them come true is where my passion lies.
          <br />I have challenged myself to try to make at least 1 new project a
          week. Currently my projects consist of landing pages, JavaScript games
          and React apps but in the future i would like to broaden my stack.
        </Paragraph>

        <Paragraph>
          You can find my full projects list{" "}
          <a href={links.github} target="_blank" rel="noreferrer">
            here
          </a>
          .
        </Paragraph>
        <br />

        <Paragraph>
          When i'm not studying I like to spend my free time by playing pool,
          going to the arcade or just listening to music.
        </Paragraph>

        <HorizontalLine />

        <Paragraph>
          Find me on{" "}
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          ,{" "}
          <a href={links.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          ,{" "}
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          , or mail me at{" "}
          <a href={links.mail} target="_blank" rel="noreferrer">
            nik-ves@hotmail.com
          </a>
          .
        </Paragraph>
        <br />

        <Paragraph>Hope you like what you find here!</Paragraph>
      </TextContainer>
    </Wrapper>
  );
};

export default HomeText;
