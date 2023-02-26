import React, { useState } from "react";
import "./filters.css";
import { searchBy } from "../../../store/moviesSlice";
import { useDispatch } from "react-redux";
const Filters = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    yearFrom: "",
    yearTo: "",
    ratingFrom: "",
    ratingTo: ""
  });
  const dispatch = useDispatch()

  const handleSearch = () => {

    const {keyword , yearFrom , yearTo , ratingFrom , ratingTo} = filters
    
    const params = {
      Title_like: keyword,
      ReleaseDate_gte: yearFrom === "" ? "1980" : yearFrom,
      ReleaseDate_lte: yearTo === "" ? "2023" : yearTo,
      Rating_gte: ratingFrom === '' ? 1 : ratingFrom,
      Rating_lte: ratingTo === '' ? 10 : ratingTo
    }
    
    dispatch(searchBy(params))
  };

  const handleClear = () => {
    setFilters({
      keyword: "",
      yearFrom: "",
      yearTo: "",
      ratingFrom: "",
      ratingTo: ""
    });
  };

  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    setFilters((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div className="sidebar">
      <div className="filter-header">
        <h3>Filter Movies :</h3>
      </div>
      <div className="filter-form d-flex align-items-center">
        <div className="filter-item">
          <label htmlFor="keyword">Keyword:</label>
          <input
            type="text"
            id="keyword"
            value={filters.keyword}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="yearFrom">Year From:</label>
          <input
            type="text"
            id="yearFrom"
            value={filters.yearFrom}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="yearTo">Year To:</label>
          <input
            type="text"
            id="yearTo"
            value={filters.yearTo}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="ratingFrom">Rating From:</label>
          <input
            type="text"
            id="ratingFrom"
            value={filters.ratingFrom}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="ratingTo">Rating To:</label>
          <input
            type="text"
            id="ratingTo"
            value={filters.ratingTo}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-actions">
          <button className="filter-button" onClick={handleSearch}>
            Search
          </button>
          <button className="filter-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
