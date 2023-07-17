import { Flag } from "../Flagbox/flag.jsx";
import { CountryName } from "../Card/Countryname/countryname.jsx";
import { Population } from "../Flagbox/Population/population.jsx";
import { Region } from "../Flagbox/Region/region.jsx";
import { Capital } from "../Flagbox/Capital/capital.jsx";
import { countrytitles } from "../Card/Countryname/countryname.module.css";
import { text } from "./text.module.css";
import { apiData } from "./apiData.module.css";
import { title } from "./title.module.css";

export const ApiComponent = ({
  country,
  capital,
  population,
  region,
  src,
  className,
  style,
  children,
}) => {
  return (
    <div className={className} style={style}>
      {children}
      <figure>
        <Flag src={src} alt={`Flag of a country: ${country}`}></Flag>
      </figure>
      <div className={text}>
        <CountryName country={country} className={countrytitles}></CountryName>
        <div className={title}>
          Population:
          <Population population={population} className={apiData}></Population>
        </div>
        <div className={title}>
          Region:
          <Region region={region} className={apiData}></Region>
        </div>
        <div className={title}>
          Capital:
          <Capital capital={capital} className={apiData}></Capital>
        </div>
      </div>
    </div>
  );
};
