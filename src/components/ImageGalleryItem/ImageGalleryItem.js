import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

function ImageGalleryItem({
  id,
  largeImageURL,
  webformatURL,
  onShowModal,
  tags,
}) {
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

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onShowModal: PropTypes.func.isRequired,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
