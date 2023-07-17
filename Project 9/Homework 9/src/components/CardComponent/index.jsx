import { PerfumesDecription } from "../MainSection";
import { Image } from "../Image";
import { CardComponentStyle } from "./Card.style";

export const Card = () => {
  return (
    <CardComponentStyle>
      <Image />
      <PerfumesDecription />
    </CardComponentStyle>
  );
};
