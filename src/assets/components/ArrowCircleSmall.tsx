import React, { MouseEvent } from "react";
//styles
import "../styles/components/style_button.scss";

interface ArrowCircleBigProps {
  arrowClick?: (event: MouseEvent<SVGSVGElement>) => void;
  isMirrored?: boolean; // Add a prop to control the mirroring
  isActive?: boolean;
}

export const ArrowCircleSmall: React.FC<ArrowCircleBigProps> = ({
  arrowClick,
  isMirrored = false,
  isActive = false,
}) => {
  return (
    <svg
      onClick={arrowClick}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        stroke={isActive ? "#adadad" : `#FF6D74`}
      />
      <path
        d="M18.1316 14.0932H9.76034C9.34215 14.0932 9 14.5029 9 15.0036C9 15.5043 9.34215 15.9139 9.76034 15.9139H18.1316V17.5434C18.1316 17.9531 18.5422 18.1534 18.7779 17.8621L20.8917 15.3222C21.0361 15.1401 21.0361 14.8579 20.8917 14.6759L18.7779 12.136C18.5422 11.8447 18.1316 12.0541 18.1316 12.4546V14.0932Z"
        fill={isActive ? "#adadad" : `#FF6D74`}
      />
    </svg>
  );
};
