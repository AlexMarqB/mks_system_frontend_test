import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  top: 0;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  padding: 0 4rem 0 4rem;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    height: 48px;
    padding: 0 1rem 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: fit-content;
  text-align: center;
  justify-content: center;
  gap: 8px;
  line-height: 19px;
  letter-spacing: 0px;
`;

export const LogoText1 = styled.div`
  font-size: 40px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    font-weight: 600;
  }
`;

export const LogoText2 = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-top: 6px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 300;
  }
`;
