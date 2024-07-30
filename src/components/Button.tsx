// components/Button.tsx

import React from "react";

interface ButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
  span?: number;
}

const Button: React.FC<{
  value: string;
  onClick: () => void;
  className?: string;
  span?: number;
}> = ({ value, onClick, className = "", span = 1 }) => (
  <button
    className={`
      px-1 py-8 border border-gray-700 text-3xl font-semibold
      flex justify-center items-center cursor-pointer
      ${span > 1 ? `col-span-${span}` : ""}
      ${className}
    `}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
