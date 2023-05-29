import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./Country.css";

const Country = () => {
  const [country, setCountry] = useState({});

  let { state } = useLocation();

  useEffect(() => {
    const getCountry = async (id) => {
      const response = await fetch("../data.json");
      const data = await response.json();
      setCountry(data[id]);
    };
    getCountry(state);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="back-button">
          <Link to="/">Back</Link>
        </div>
        <div className="flag-container">
          <img
            className="flag"
            src={country.flag}
            alt={`${country.name}'s flag`}
          />
        </div>
        <h2>{country.name}</h2>
        <p>Native Name: {country.nativeName}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Catpital: {country.capital}</p>

        <p>Top Level Domain: {country.topLevelDomain} </p>
      </div>
    </div>
  );
};

export default Country;
