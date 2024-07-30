import React, { useState } from "react";

import Keyboard from "./components/Keyboard";

export default function App() {
  // State variables
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // helper function to perform calculations
  const calculateResult = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "÷":
        return b !== 0 ? a / b : NaN;
      default:
        return b;
    }
  };

  // Handle number input

  const handleNumberInput = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  // handle operator input
  const handleOperatorInput = (op: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operator) {
      const result = calculateResult(prevValue, inputValue, operator);
      setPrevValue(result);
      setDisplay(String(result));
    }

    setWaitingForOperand(true);
    setOperator(op);
  };

  // handle equals button
  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (prevValue !== null && operator) {
      const result = calculateResult(prevValue, inputValue, operator);
      setDisplay(String(result));
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  // clear all states
  const handleClear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  // add decimal point
  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  // calculate percentage
  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  // toggle sign (positive/ negative)
  const handleToggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  return (
    <Keyboard
      display={display}
      onNumberInput={handleNumberInput}
      onPeratorInput={handleOperatorInput}
      onEquals={handleEquals}
      onClear={handleClear}
      onDecimal={handleDecimal}
      onPercentage={handlePercentage}
      onToggleSign={handleToggleSign}
    />
  );
}
