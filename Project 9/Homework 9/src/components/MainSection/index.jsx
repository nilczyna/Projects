import { Button } from "../Button";
import {
  Main,
  TextContainer,
  HeaderStyled,
  DescriptionStyled,
  PriceSection,
  DiscountPriceSpan,
  NormalPriceSpan,
} from "./MainSection.style";

import { createGlobalStyle } from "styled-components";
const GlobalStyele = createGlobalStyle`body{
  font-family:"Fraunces", serif;
}`;

export const PerfumesDecription = () => {
  return (
    <Main>
      <TextContainer>
        <HeaderStyled>PERFUME</HeaderStyled>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <DescriptionStyled>
          A floral, solar and volumpuous interpertation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANNEL
        </DescriptionStyled>
        <PriceSection>
          <DiscountPriceSpan>$149.99</DiscountPriceSpan>
          <NormalPriceSpan>$169.99</NormalPriceSpan>
        </PriceSection>
        <Button />
      </TextContainer>
    </Main>
  );
};
