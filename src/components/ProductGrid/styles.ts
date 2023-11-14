import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  height: auto;
  max-width: auto;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 701) and (max-width: 1000px) {
    overflow-y: auto;
    grid-template-columns: repeat(3, 1fr);
  }
`;
