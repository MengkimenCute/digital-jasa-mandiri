
import React, { useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const OptimizedImage = ({ src, alt, width, height, className, ...props }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (src.startsWith('http')) {
      return undefined; // Don't generate srcSet for external images
    }
    
    const sizes = [320, 480, 768, 1024, 1280];
    return sizes
      .map((size) => `${src}?w=${size} ${size}w`)
      .join(', ');
  };

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <Skeleton 
          className={`absolute inset-0 ${className}`}
          style={{ width: '100%', height: '100%' }}
        />
      )}
      
      {!error ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading="lazy"
          srcSet={generateSrcSet()}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-md">
          <span className="text-sm text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
