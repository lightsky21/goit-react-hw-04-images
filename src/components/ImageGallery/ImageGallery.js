import React from 'react';
import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';

import ImageGalleryItem from 'components/ImageGalleryItem';

function ImageGallery({ pictures, onShowModal }) {
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
ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object.isRequired),
  onShowModal: PropTypes.func.isRequired,
};

export default ImageGallery;
