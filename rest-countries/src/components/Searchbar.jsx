import { useState } from "react";
import { GoSearch } from "react-icons/go";
import "./Searchbar.css";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="searchbar">
      <GoSearch />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchbar__input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Searchbar;
