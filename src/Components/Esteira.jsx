import React, { useEffect, useRef } from 'react';
import './Esteira.css'

const WordCarousel = ({ words = ["Transformando histórias com leveza e autenticidade"] }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        
        // Limpa o conteúdo anterior
        carousel.innerHTML = '';
        
        // Cria múltiplas cópias do conteúdo para garantir fluidez infinita
        const copies = 8; // Número de cópias
        
        for (let copy = 0; copy < copies; copy++) {
            words.forEach((word, index) => {
                const wordElement = document.createElement('div');
                wordElement.className = 'word-item';
                wordElement.textContent = word;
                carousel.appendChild(wordElement);
            });
        }

        // Inicia a animação
        carousel.classList.add('animate');
    }, [words]);

    return (
        <div className="word-carousel-container">
            <div className="word-carousel-wrapper">
                <div className="word-carousel" ref={carouselRef}>
                    {/* O conteúdo será inserido dinamicamente via JavaScript */}
                </div>
            </div>
        </div>
    );
};

export default WordCarousel;