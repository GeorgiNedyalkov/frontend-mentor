const Countries = ({ countries }) => {
  return (
    <ul>
      {countries.map((country, countryId) => {
        return (
          <li key={countryId}>
            <CountryCard {...country} />
          </li>
        );
      })}
    </ul>
  );
};

const CountryCard = ({ name, population, region, capital, flag }) => {
  return (
    <article className="country">
      <div className="country__flag-container">
        <img className="country__flag" src={flag} alt="country flag" />
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
