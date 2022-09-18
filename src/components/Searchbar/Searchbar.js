import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { ReactComponent as SearchIcon } from '../images/search.svg';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  BtnLabel,
  Input,
} from './Searchbar.styled';

function Searchbar({ onSubmit = null }) {
  
  const [pictureName, setPictureName] = useState('');

  const handleNameChange = event =>
    setPictureName(event.currentTarget.value.toLowerCase());

  const handleSubmit = event => {
    if (pictureName.trim() === '') {
      return;
    }
    event.preventDefault();
    onSubmit(pictureName);
    setPictureName('');
  };

  return (
    <SearchbarHeader onSubmit={handleSubmit}>
      <SearchForm>
        <SearchFormBtn type="submit">
          <BtnLabel>Search</BtnLabel>
        </SearchFormBtn>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
          value={pictureName}
        />
      </SearchForm>
    </SearchbarHeader>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
