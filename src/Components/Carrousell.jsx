import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carrousell.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5'
  ];

  // Hook para detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const itemsToShow = isMobile ? 1 : 3;

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - itemsToShow : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex >= images.length - itemsToShow ? 0 : currentIndex + 1);
  };

  return (
    <div className={`carousel-container ${isMobile ? 'mobile' : ''}`}>
      <button
        className="carousel-btn carousel-btn-left"
        onClick={goToPrevious}
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={isMobile ? 30 : 50} />
      </button>

      <div className="carousel-wrapper">
        <div className="carousel-content">
          {[...Array(itemsToShow)].map((_, index) => {
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
      </div>

      <button
        className="carousel-btn carousel-btn-right"
        onClick={goToNext}
        aria-label="Próxima imagem"
      >
        <ChevronRight size={isMobile ? 30 : 50} />
      </button>

    </div>
  );
};

export default Carousel;