import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';
class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <LoadMoreButton onClick={this.props.onClick}>Load more</LoadMoreButton>
    );
  }
}

export default Button;
