import "./App.css";
import { React, useState, useEffect } from "react";
import { ApiComponent } from "./components/API/apiComponent.jsx";
import style from "./components/API/apicomponent.module.css";
import Select from "react-select";
import { Header } from "./components/Header/header.jsx";
import { card } from "./components/Card/card.module.css";
import { fetchCountries } from "./components/API/api.jsx";
import { inputSection } from "./components/Searchsection/inputsection.jsx";
import { inputsection } from "./components/Searchsection/inputsection.module.css";
import { Search } from "./components/Searchsection/search";
import { search } from "./components/Searchsection/search.module.css";

function CountriesApp() {
  const [countries, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const result = await fetchCountries();
    setCountry(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const [isdarkMode, setisDarkMode] = useState(false);
  const theme = (e) => {
    e.preventDefault(), isdarkMode ? setisDarkMode(false) : setisDarkMode(true);
  };
  const boxheaderstyle = {
    backgroundColor: isdarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    color: isdarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
  };
  const apisearchstyle = {
    backgroundColor: isdarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
  };
  const icon = isdarkMode ? "✰" : "☾";
  const themetext = isdarkMode ? "Light Mode" : "Dark Mode";

  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
    if (searchCountry !== "") {
      setSelectedCountry(e.target.value);
      const selected = countries.filter((selectedResult) => {
        return Object.values(selectedResult).includes(SelectedCountry);
      });
      setSelectedCountryResult(selected);

      const searchResult = countries.filter((searchResults) => {
        return Object.values(searchResults.name)
          .join("")
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
      });
      setFilteredCountries(searchResult);
    } else {
      setFilteredCountries(countries);
    }
  };

  let country = ({ name }) => ({ name });
  let chosenCountry = countries.map(country);
  chosenCountry["name"] = chosenCountry["value"];

  const newChosenCountry = chosenCountry.map(({ name: value }) => ({
    value,
  }));

  function extractValue(arr, prop) {
    let extractedValue = arr.map((item) => item[prop]);
    return extractedValue;
  }

  const result = extractValue(newChosenCountry, "value");
  newChosenCountry.forEach((object) => {
    object.label = object.value;
  });

  const [SelectedCountry, setSelectedCountry] = useState("");
  const [SelectedCountryResult, setSelectedCountryResult] = useState([]);

  const handleSelect = (selectedCountry) => {
    const selectQuery = selectedCountry.value;
    setSelectedCountry(selectQuery);
    if (selectedCountry !== "") {
      setSearchCountry("");
      const searchResult = countries.filter((searchResults) => {
        return Object.values(searchResults)
          .join("")
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
      });

      setFilteredCountries(searchResult);

      const selected = countries.filter((selectedResult) => {
        return Object.values(selectedResult).includes(selectQuery);
      });
      setSelectedCountryResult(selected);
    } else {
      setSelectedCountryResult(countries);
    }
  };
  return (
    <>
      <Header onClick={theme} style={boxheaderstyle}>
        {" "}
        {icon} {themetext}
      </Header>
      <>
        <inputSection
          method="POST"
          className={inputsection}
          style={apisearchstyle}
        >
          <Search
            type="search"
            placeholder="Search for a country..."
            className={search}
            onChange={handleSearch}
          ></Search>

          <Select options={newChosenCountry} onChange={handleSelect}></Select>
        </inputSection>
      </>

      <div className={card} style={boxheaderstyle}>
        {isLoading === true && <h2>Loading...Please wait...</h2>}

        {searchCountry.length > 1
          ? filteredCountries.map((searchResults) => {
              return (
                <ApiComponent
                  key={Math.random()}
                  className={style.wrapper}
                  src={searchResults?.flag}
                  country={searchResults?.name}
                  capital={searchResults?.capital}
                  population={searchResults?.population.toLocaleString()}
                  region={searchResults?.region}
                  style={apisearchstyle}
                />
              );
            })
          : countries &&
            countries.map((country) => {
              return (
                <ApiComponent
                  key={Math.random()}
                  className={style.wrapper}
                  src={country?.flag}
                  country={country?.name}
                  capital={country?.capital}
                  population={country?.population.toLocaleString()}
                  region={country?.region}
                  style={apisearchstyle}
                />
              );
            })}
        {SelectedCountry.length > 1
          ? SelectedCountryResult.map((selectedResult) => {
              return (
                <ApiComponent
                  key={Math.random()}
                  className={style.wrapper}
                  src={selectedResult?.flag}
                  country={selectedResult?.name}
                  capital={selectedResult?.capital}
                  population={selectedResult?.population.toLocaleString()}
                  region={selectedResult?.region}
                  style={apisearchstyle}
                />
              );
            })
          : countries &&
            countries.map((country) => {
              return (
                <ApiComponent
                  key={Math.random()}
                  className={style.wrapper}
                  src={country?.flag}
                  country={country?.name}
                  capital={country?.capital}
                  population={country?.population.toLocaleString()}
                  region={country?.region}
                  style={apisearchstyle}
                />
              );
            })}
      </div>
    </>
  );
}

export default CountriesApp;
