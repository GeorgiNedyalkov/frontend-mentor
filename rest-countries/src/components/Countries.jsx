import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = ({ countries }) => {
  return (
    <ul className="countries">
      {countries.map((country, countryId) => {
        return (
          <li key={countryId}>
            <CountryCard id={countryId} {...country} />
          </li>
        );
      })}
    </ul>
  );
};

const CountryCard = ({ id, name, population, region, capital, flag }) => {
  return (
    <article className="country">
      <div className="country__flag-container">
        <Link to={`/${id}`} state={id}>
          <img className="country__flag" src={flag} alt="country flag" />
        </Link>
      </div>
      <div className="country__info">
        <h2>{name}</h2>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </article>
  );
};

export default Countries;
