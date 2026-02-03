import React from 'react';

// Export pertama untuk Card
export function Card({ className = '', children }) {
  return (
    <div className={`bg-white border border-gray-100 rounded-2xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// Export kedua untuk CardContent (INI YANG HILANG/SALAH)
export function CardContent({ className = '', children }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}