import React from "react";

const BallSvg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="97"
        height="99"
        viewBox="0 0 97 99"
        fill="none"
        className="ball-svg"
      >
        <g filter="url(#filter0_f_10395_2005)">
          <circle cx="13.5" cy="15.5" r="23.5" ></circle>
        </g>
        <defs>
          <filter
            id="filter0_f_10395_2005"
            x="-70"
            y="-68"
            width="167"
            height="167"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="30"
              result="effect1_foregroundBlur_10395_2005"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BallSvg;
