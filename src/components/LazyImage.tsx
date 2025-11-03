import { useState, useRef, useEffect, useCallback } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  decoding?: "async" | "sync" | "auto";
  onClick?: () => void;
}

export const LazyImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  priority = false,
  decoding = "async",
  onClick,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Utilisation de useCallback pour éviter les re-rendus inutiles
  const handleIntersection = useCallback<IntersectionObserverCallback>((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });
  }, []);

  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "50px",
      threshold: 0.01,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, isInView, handleIntersection]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" aria-hidden="true" />
      )}
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : loading}
          decoding={decoding}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          style={{
            contentVisibility: "auto",
            contain: "layout style paint",
            willChange: "opacity",
          }}
        />
      )}
    </div>
  );
};