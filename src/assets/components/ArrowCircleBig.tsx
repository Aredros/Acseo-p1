import React, { MouseEvent } from "react";
//styles
import "../styles/components/style_button.scss";

interface ArrowCircleBigProps {
  arrowClick?: (event: MouseEvent<SVGSVGElement>) => void;
  isMirrored?: boolean; // Add a prop to control the mirroring
  isActive?: boolean;
}

export const ArrowCircleBig: React.FC<ArrowCircleBigProps> = ({
  arrowClick,
  isMirrored = false,
  isActive = false,
}) => {
  return (
    <svg
      onClick={arrowClick}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        stroke={isActive ? "#adadad" : `#FF6D74`}
      />
      <path
        d={
          isMirrored
            ? "M 16.8684 19.0932 H 25.2397 C 25.6578 19.0932 26 19.5029 26 20.0036 C 26 20.5043 25.6578 20.9139 25.2397 20.9139 H 16.8684 V 22.5434 C 16.8684 22.9531 16.4578 23.1534 16.2221 22.8621 L 14.1083 20.3222 C 13.9639 20.1401 13.9639 19.8579 14.1083 19.6759 L 16.2221 17.136 C 16.4578 16.8447 16.8684 17.0541 16.8684 17.4546 V 19.0932 Z"
            : "M23.1316 19.0932H14.7603C14.3422 19.0932 14 19.5029 14 20.0036C14 20.5043 14.3422 20.9139 14.7603 20.9139H23.1316V22.5434C23.1316 22.9531 23.5422 23.1534 23.7779 22.8621L25.8917 20.3222C26.0361 20.1401 26.0361 19.8579 25.8917 19.6759L23.7779 17.136C23.5422 16.8447 23.1316 17.0541 23.1316 17.4546V19.0932Z"
        }
        fill={isActive ? "#adadad" : `#FF6D74`}
      />
    </svg>
  );
};
