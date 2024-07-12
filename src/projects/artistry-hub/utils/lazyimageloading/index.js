import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt, ...rest }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the image only once when it comes into view
  });

  return (
    <div ref={ref} style={{ width: '100%', height: 'auto' }}>
      {inView && <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} {...rest} />}
    </div>
  );
};

export default LazyImage;
