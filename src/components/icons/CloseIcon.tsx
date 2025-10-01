// components/icons/CloseIcon.tsx
import React from "react";

interface CloseIconProps {
  size?: number;
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ size = 12, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#8F8F8F"
      strokeWidth="2"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default CloseIcon;
