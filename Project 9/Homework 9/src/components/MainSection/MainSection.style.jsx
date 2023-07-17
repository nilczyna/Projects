import styled from "styled-components";

export const Main = styled.div`
  border-radius: 0 10px 10px 0;
  width: 50%;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 10px 10px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: -webkit-fill-available;
`;

export const HeaderStyled = styled.h5`
  font-size: 0.8em;
  line-height: 1.1;
  font-family: "Montserrat", serif;
  font-weight: 400;
  text-align: left;
  margin: 20px 0 0 0;
  color: #666;
  letter-spacing: 3px;
`;

export const DescriptionStyled = styled.p`
  font-size: 13px;
  line-height: 1.3;
  text-align: left;
  color: #777;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const DiscountPriceSpan = styled.span`
  font-size: 1.7em;
  color: hsl(158, 36%, 37%);
  font-weight: 700;
  font-family:"Fraunces", serif;
`;

export const NormalPriceSpan = styled.span`
  margin: 0 0 0 20px;
  font-size: 14px;
  text-decoration: line-through;
  color: #666;
`;
