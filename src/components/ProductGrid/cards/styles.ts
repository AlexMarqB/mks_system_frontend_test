import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 218px;
  height: 285px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0 0.5rem 0;
  height: 138px;

  img {
    width: 50%;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  width: auto;
  max-height: auto;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  line-height: 19px;
  letter-spacing: 0px;
  color: #2c2c2c;
  padding: 0 0.5rem 0 0.5rem;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

export const PriceContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  background-color: #373737;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  width: auto;
  color: #2c2c2c;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

export const BuyButtonContainer = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
  width: auto;
  height: auto;
  margin-top: auto;

  :hover {
    cursor: pointer;
  }
`;

export const BuyButtonContent = styled.div`
  background-color: #0f52ba;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: auto;
  min-height: 31.91px;
  height: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: auto;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;
