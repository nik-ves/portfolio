import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
`;

const PageNotFound = () => {
  return (
    <Wrapper>
      <p>Page not found!</p>
    </Wrapper>
  );
};

export default PageNotFound;
