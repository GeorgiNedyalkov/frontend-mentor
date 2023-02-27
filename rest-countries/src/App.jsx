import Countries from "./components/Countries";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

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
      <Searchbar search={search} setSearch={setSearch} />
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
