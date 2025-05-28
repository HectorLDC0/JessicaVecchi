import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carrousell.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5'
  ];

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 3 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex >= images.length - 3 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button 
          className="carousel-btn carousel-btn-left" 
          onClick={goToPrevious}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-content">
          {[...Array(3)].map((_, index) => {
            const imageIndex = (currentIndex + index) % images.length;
            return (
              <img 
                key={imageIndex}
                src={images[imageIndex]} 
                alt={`Slide ${imageIndex + 1}`}
                className="carousel-image"
              />
            );
          })}
        </div>

        <button 
          className="carousel-btn carousel-btn-right" 
          onClick={goToNext}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: Math.max(1, images.length - 2) }, (_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;