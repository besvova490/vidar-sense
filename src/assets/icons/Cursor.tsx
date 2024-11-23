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
      <rect x="36.6001" width="6" height="32" rx="3" fill="#FEF2F2" />
      <rect x="36.6001" y="48" width="6" height="32" rx="3" fill="#FEF2F2" />
      <rect
        x="80"
        y="37"
        width="6"
        height="32"
        rx="3"
        transform="rotate(90 80 37)"
        fill="#FEF2F2"
      />
      <rect
        x="32"
        y="37"
        width="6"
        height="32"
        rx="3"
        transform="rotate(90 32 37)"
        fill="#FEF2F2"
      />
      <rect x="37" y="37" width="6" height="6" rx="3" fill="#FEF2F2" />
    </svg>
  );
}
