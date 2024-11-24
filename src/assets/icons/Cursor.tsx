import React from 'react'

export const Cursor = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9"
        y="9"
        width="62"
        height="62"
        rx="31"
        stroke="#EF4444"
        strokeWidth="2"
      />
      <rect x="0.5" y="39.5" width="31" height="1" fill="#EF4444" />
      <rect x="0.5" y="39.5" width="31" height="1" stroke="#EF4444" />
      <rect x="48.5" y="39.5" width="31" height="1" fill="#EF4444" />
      <rect x="48.5" y="39.5" width="31" height="1" stroke="#EF4444" />
      <rect
        x="39.5"
        y="79.5"
        width="31"
        height="1"
        transform="rotate(-90 39.5 79.5)"
        fill="#EF4444"
      />
      <rect
        x="39.5"
        y="79.5"
        width="31"
        height="1"
        transform="rotate(-90 39.5 79.5)"
        stroke="#EF4444"
      />
      <rect
        x="39.5"
        y="31.5"
        width="31"
        height="1"
        transform="rotate(-90 39.5 31.5)"
        fill="#EF4444"
      />
      <rect
        x="39.5"
        y="31.5"
        width="31"
        height="1"
        transform="rotate(-90 39.5 31.5)"
        stroke="#EF4444"
      />
    </svg>
  );
}
