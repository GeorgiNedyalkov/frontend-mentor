import Countries from "./components/Countries";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

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
      <Countries countries={countries} />
    </div>
  );
}

export default App;
