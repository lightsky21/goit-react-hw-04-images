import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    onShowModal: PropTypes.func.isRequired,
    tags: PropTypes.string,
  };
  render() {
    const { id, largeImageURL, webformatURL, onShowModal, tags } = this.props;

    return (
      <GalleryItem key={id}>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          onClick={() => onShowModal({ largeImageURL, tags })}
        />
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
