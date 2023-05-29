import "./FilterRegion.css";

const FilterRegion = ({ region, setRegion, countries }) => {
  return (
    <div className="select__wrapper">
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="filter-region"
      >
        <option value="Filter by Region">Filter by Region</option>
        {countries.map((country) => (
          <option key={country.name} value={country.region}>
            {country.region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterRegion;
