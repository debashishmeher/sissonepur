import { Image } from '@unpic/react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width = 800,
  height = 600,
  priority = false,
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}