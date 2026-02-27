import React, { useState, useRef, useEffect } from 'react'

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        try {
          observer.unobserve(elementRef.current);
        } catch (e) {
          // ignore if already unobserved
        }
      }
    };
  }, [threshold, isVisible]);


  return (
    <div
      ref={elementRef}
      className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}

    </div>
  );

}

export default FadeIn
