import styled from "styled-components";

export const CartButtonContainer = styled.button`
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

export const CartButtonContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
    width: 52px;
    height: 26px;
    font-size: 12px;
    line-height: 14.63px;

    img {
      width: 25%;
    }
  }
`;
