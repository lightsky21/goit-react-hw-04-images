import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalImage } from './Modal.styled';

class Modal extends Component {
  static defaultProps = { onClose: null, children: null };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>
    );
  }
}

export default Modal;
