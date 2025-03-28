import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Remove focus from the input to prevent unwanted scrolling
    const input = event.target.querySelector("input");
    if (input) input.blur();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form role="search" className="search" onSubmit={handleSubmit}>
      <label htmlFor="search-input" className="sr-only">
        Search through thousands of movies
      </label>
      <div className="flex items-center">
        <img src="search.svg" alt="" aria-hidden="true" />
        <input
          id="search-input"
          className="ml-2 focus:ring-1 ring-indigo-500 ring-offset-2 ring-offset-indigo-500 rounded-lg"
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search movies"
        />
      </div>
    </form>
  );
};

export default Search;
