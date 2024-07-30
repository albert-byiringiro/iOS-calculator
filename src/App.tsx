import React, { useState } from "react";

import Keyboard from "./components/Keyboard";

export default function App() {
  // State variables
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
}
