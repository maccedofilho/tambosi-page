import React from 'react';

interface LogoProps {
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ height = 40, className = '' }) => {
  return (
    <img
      src="/DOURADO.png"
      alt="Tambosi Advocacia"
      height={height}
      width={undefined}
      className={`w-auto max-w-[min(100%,280px)] object-contain object-left ${className}`}
      style={{ height }}
      decoding="async"
    />
  );
};

export default Logo;
