import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';

import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  static propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object.isRequired),
    onShowModal: PropTypes.func.isRequired,
  };
  render() {
    const { pictures, onShowModal } = this.props;
    return (
      <Gallery>
        {pictures.map(({ webformatURL, largeImageURL, tags }, id) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShowModal={onShowModal}
            tags={tags}
          />
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
