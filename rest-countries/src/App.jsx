import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import FilterRegion from "./components/FilterRegion";
import Countries from "./components/Countries";
import { useEffect, useState, useMemo } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("Filter by Region");
  const [search, setSearch] = useState("");

  const filteredCountries = useMemo(() => {
    const searchedCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    if (region !== "Filter by Region") {
      return searchedCountries.filter((country) => country.region === region);
    }

    return searchedCountries;
  }, [countries, search, region]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="filters">
          <Searchbar search={search} setSearch={setSearch} />
          <FilterRegion
            region={region}
            setRegion={setRegion}
            countries={countries}
          />
        </div>
        <Countries countries={filteredCountries} />
      </div>
    </div>
  );
}

export default App;
