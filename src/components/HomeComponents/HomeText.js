import { Wrapper, TextContainer, Paragraph } from "./HomeStyles";

import * as Line from "../UI/Lines";

import * as Headers from "../UI/Headers";

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
        <Headers.Primary>Nikola Veselinović</Headers.Primary>

        <Paragraph>
          Hello, my name is Nikola Veselinović, currently working as a Microsoft
          Dynamics developer located in Belgrade, Serbia.
        </Paragraph>
        <br />

        <Paragraph>
          For the last two years I've been spending my free time building
          various applications, mostly for web, but from time to time I like to
          mix it up a bit and build for other platforms.
        </Paragraph>
        <br />

        <Paragraph>
          Technologies I'm currently using are all JavaScript related like
          React.js, React Native, Node.js but i'm always open to learning new
          ones. Since I've tried almost all of the JavaScript
          frameworks/libraries, the next one in line is Electron.js for desktop
          applications.
        </Paragraph>
        <br />

        <Paragraph>
          You can find my full projects list{" "}
          <a href={links.github} target="_blank" rel="noreferrer">
            here
          </a>
          .
        </Paragraph>
        <br />

        <Line.Horizontal big />

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
