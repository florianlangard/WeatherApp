import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ search, setSearch, manageSubmit }) => {
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <form
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();
        manageSubmit();
      }}
    >
      <div className="searchbar">
        {/* <i className="fas fa-search" /> */}
        <input
          type="text"
          className="input"
          placeholder="On va voir où?"
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
          value={search}
          ref={textInput}
        />
      </div>
    </form>
  );
};
SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
