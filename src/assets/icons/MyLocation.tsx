import React from "react";

export const MyLocation = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%" }}
    >
      <g filter="url(#filter0_d_16_165)">
        <rect x="12" y="12" width="20" height="20" rx="10" fill="#0EA5E9" />
        <rect
          x="13"
          y="13"
          width="18"
          height="18"
          rx="9"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_16_165"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="12"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_16_165"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.054902 0 0 0 0 0.647059 0 0 0 0 0.913725 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_16_165"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_16_165"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
