import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 50, height = 40, className = '' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 50 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Tambosi Advocacia"
      role="img"
    >
      <path d="M25 38V14C25 9 36 9 42 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M25 38V14C25 9 14 9 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M25 38V17" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 14C16 8 23 8 25 11" stroke="#C3B69B" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M40 14C34 8 27 8 25 11" stroke="#C3B69B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Logo;
