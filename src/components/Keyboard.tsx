import React from "react";

interface KeyboardProps {
  display: string;
  onNumberInput: (num: string) => void;
  onOperatorInput: (op: string) => void;
  onEquals: () => void;
  onClear: () => void;
  onDecimal: () => void;
  onPercentage: () => void;
  onToggleSign: () => void;
}

// Reusable Button component
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
    onClick={onclick}
  >
    {value}
  </button>
);
