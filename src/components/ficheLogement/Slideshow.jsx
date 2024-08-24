import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              {index === currentIndex && (
                <img src={image} alt={`Slide ${index + 1}`} />
              )}
            </div>
          ))
        ) : (
          <div className="slide active">
            <p>No images to display</p>
          </div>
        )}
      </div>
      <button className="prev" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
