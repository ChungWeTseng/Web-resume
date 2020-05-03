import React, { useState, useRef, useEffect } from 'react'

const FadeInSection = props => {
  const {className} = props;
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const ref = domRef.current.copy
    observer.observe(domRef.current);
    return () => observer.unobserve(ref);
  }, []);

  return (
    <div
      className={`${className} fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection
