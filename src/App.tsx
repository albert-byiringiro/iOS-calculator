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
}
