import styled from "styled-components";
import icon from "../../assets/icon-cart.svg";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  background-color: hsl(158, 36%, 37%);
  color: hsl(0, 0%, 100%);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 15px;
  border-style: none;
  border-radius: 10px;
  height: 50px;
  width: 100%;
`;

export const IconStyled = styled.i`
  padding: 0 20px 0 0;
  display: block;
  height: 15px;
  width: 14px;
  background-image: url(${icon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
