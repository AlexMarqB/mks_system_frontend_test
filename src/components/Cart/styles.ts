import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-evenly;
  align-items: stretch;
  z-index: 20;
  right: 0;
  bottom: 0;
  width: 486px;
  min-height: 100vh;
  height: auto;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const Head = styled.div`
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem 2rem 2rem;
  gap: 7rem;
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;

  @media screen and (max-width: 768px) {
    justify-content: none;
    padding: 1rem;
    gap: 1rem;
    font-size: 27px;
  }
`;

export const CloseButton = styled.button`
  z-index: 30;
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  :hover {
    cursor: pointer;
  }
`;

export const ItensList = styled.div`
  z-index: 30;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 2rem;
  gap: 2rem;
  width: 80%;
  max-height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding-top: 2rem;
  width: auto;
  height: auto;
  gap: 1rem;
`;

export const Info = styled.div`
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 1.5rem 2rem;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`;

export const FinishButtonContainer = styled.button`
  z-index: 30;
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  width: auto;
  height: auto;
  :hover {
    cursor: pointer;
  }
`;

export const FinishButtonContent = styled.div`
  z-index: 30;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 60px;
  margin-top: auto;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 65.86px;
    font-size: 20px;
  }
`;
