import React from 'react';

export function Button({ className = '', children, variant = 'primary', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all';
  
  const variants = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700',
    secondary: 'bg-white text-sky-600 hover:bg-gray-50'
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}