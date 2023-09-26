import React, { Component } from "react";

interface EmailProps {
  blackVblue?: boolean; // Add a prop to control the mirroring
}

export const Email_logo: React.FC<EmailProps> = ({ blackVblue = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33335 3.33325H16.6667C17.5834 3.33325 18.3334 4.08325 18.3334 4.99992V14.9999C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33335C2.41669 16.6666 1.66669 15.9166 1.66669 14.9999V4.99992C1.66669 4.08325 2.41669 3.33325 3.33335 3.33325Z"
        stroke={blackVblue ? "#000" : "#A7D9DB"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3334 5L10 10.8333L1.66669 5"
        stroke={blackVblue ? "#000" : "#A7D9DB"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
