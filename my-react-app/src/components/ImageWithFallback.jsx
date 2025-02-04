import { useState } from 'react';
import { generateSrcSet } from '../utils/imageOptimizer';

const ImageWithFallback = ({ src, alt, className, sizes = "100vw" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
      )}
      
      {hasError ? (
        <div className="bg-gray-100 flex items-center justify-center p-4 rounded">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImageWithFallback;