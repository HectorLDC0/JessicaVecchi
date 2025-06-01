// FadeWrapper.jsx
import { useState, useEffect, useRef } from 'react';
import './FadeWrapper.css';

// Hook para detectar scroll
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return [targetRef, isIntersecting];
}

function FadeWrapper({ 
  children, 
  type = 'scroll', // 'scroll' ou 'load'
  delay = 0, 
  duration = 1000,
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  distance = 30,
  className = '',
  once = true // anima apenas uma vez
}) {
  const [ref, isVisible] = useIntersectionObserver();
  const [shouldAnimate, setShouldAnimate] = useState(type === 'load');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (type === 'load') {
      // Fade in ao carregar
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [type, delay]);

  useEffect(() => {
    if (type === 'scroll' && isVisible && (!once || !hasAnimated)) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [type, isVisible, delay, once, hasAnimated]);

  // Define a direção do movimento
  const getTransform = () => {
    if (direction === 'none') return '';
    
    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`
    };
    
    return transforms[direction] || transforms.up;
  };

  const fadeStyle = {
    opacity: shouldAnimate ? 1 : 0,
    transform: shouldAnimate ? 'translate(0, 0)' : getTransform(),
    transition: `all ${duration}ms ease-out`,
    transitionDelay: type === 'load' ? `${delay}ms` : '0ms'
  };

  if (type === 'scroll') {
    return (
      <div 
        ref={ref}
        style={fadeStyle}
        className={`fade-wrapper ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div 
      style={fadeStyle}
      className={`fade-wrapper ${className}`}
    >
      {children}
    </div>
  );
}

export default FadeWrapper;