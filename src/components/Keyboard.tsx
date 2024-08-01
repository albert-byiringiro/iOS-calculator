// src/components/Keyboard.tsx
import React from "react";
import { Operator } from "../types/calculator";

interface KeyboardProps {
  display: string;
  dispatch: React.Dispatch<any>;
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

export default function Keyboard({ display, dispatch }: KeyboardProps) {
  const handleNumberInput = (num: string) =>
    dispatch({ type: "INPUT_NUMBER", payload: num });
  const handleOperatorInput = (op: Operator) =>
    dispatch({ type: "INPUT_OPERATOR", payload: op });

  return (
    <main className="max-w-[400px] mx-auto mt-4">
      <div className="bg-gray-700 p-4 text-right">
        <span className="text-white text-6xl">{display}</span>
      </div>

      <div className="grid grid-cols-4">
        <Button
          value="AC"
          onClick={() => dispatch({ type: "CLEAR" })}
          className="bg-gray-300"
        />
        <Button
          value="±"
          onClick={() => dispatch({ type: "TOGGLE_SIGN" })}
          className="bg-gray-300"
        />
        <Button
          value="%"
          onClick={() => dispatch({ type: "CALCULATE_PERCENTAGE" })}
          className="bg-gray-300"
        />
        <Button
          value="÷"
          onClick={() => handleOperatorInput("÷")}
          className="bg-orange-400 text-white"
        />

        {[7, 8, 9].map((num) => (
          <Button
            key={num}
            value={String(num)}
            onClick={() => handleNumberInput(String(num))}
            className="bg-gray-300"
          />
        ))}
        <Button
          value="x"
          onClick={() => handleOperatorInput("x")}
          className="bg-orange-400 text-white"
        />
        {[4, 5, 6].map((num) => (
          <Button
            key={num}
            value={String(num)}
            onClick={() => handleNumberInput(String(num))}
            className="bg-gray-300"
          />
        ))}
        <Button
          value="-"
          onClick={() => handleOperatorInput("-")}
          className="bg-orange-400 text-white"
        />
        {[1, 2, 3].map((num) => (
          <Button
            key={num}
            value={String(num)}
            onClick={() => handleNumberInput(String(num))}
            className="bg-gray-300"
          />
        ))}

        <Button
          value="+"
          onClick={() => handleOperatorInput("+")}
          className="bg-orange-400 text-white"
        />

        <Button
          value="0"
          onClick={() => handleNumberInput("0")}
          className="bg-gray-300"
          span={2}
        />
        <Button
          value="."
          onClick={() => dispatch({ type: "INPUT_DECIMAL" })}
          className="bg-gray-300"
        />
        <Button
          value="="
          onClick={() => dispatch({ type: "CALCULATE" })}
          className="bg-orange-400 text-white"
        />
      </div>
    </main>
  );
}
