import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { ReactComponent as SearchIcon } from '../images/search.svg';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  BtnLabel,
  Input,
} from './Searchbar.styled';

class Searchbar extends Component {
  static defaultProps = { onSubmit: null };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    pictureName: '',
  };

  handleNameChange = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { pictureName } = this.state;
    if (pictureName.trim() === '') {
      return;
    }
    event.preventDefault();
    this.props.onSubmit(pictureName);
    this.setState({ pictureName: '' });
  };
  render() {
    return (
      <SearchbarHeader onSubmit={this.handleSubmit}>
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
            onChange={this.handleNameChange}
            value={this.state.pictureName}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
