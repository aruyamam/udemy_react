import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlace, startSearch } from '../actions';

const SearchForm = ({
  history, place, setPlace, startSearch,
}) => (
  <form
    className="search-form"
    onSubmit={(e) => {
      e.preventDefault();
      history.push(`/?place=${place}`);
      startSearch();
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={place}
      onChange={(e) => {
        e.preventDefault();
        setPlace(e.target.value);
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(SearchForm);
