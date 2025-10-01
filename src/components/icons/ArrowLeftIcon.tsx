// app/components/icons/ArrowLeftIcon.tsx
import React from "react";

interface ArrowLeftIconProps {
  size?: number;
  className?: string;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ size = 16, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      {/* Flecha tipo ← */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7-7m-7 7l7 7" />
    </svg>
  );
};

export default ArrowLeftIcon;
