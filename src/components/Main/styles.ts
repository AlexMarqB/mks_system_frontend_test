import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100vh;

  @media screen and (max-width: 600px) {
    overflow-y: auto;
    height: auto;
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    height: 90vh;
  }
`;
