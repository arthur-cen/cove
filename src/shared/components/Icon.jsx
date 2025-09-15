import React from 'react';

const Icon = ({ path, color, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d={path} />
  </svg>
);

export default Icon;
