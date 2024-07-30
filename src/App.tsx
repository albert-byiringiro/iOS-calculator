import { ChangeEvent, useState } from "react";
import Keyboard from "./components/Keyboard";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [symbol, setSymbol] = useState("");

  const selectNumber = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedNumber(e.target.value);
    console.log(e.target.value);
  };

  const selectSymbol = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedNumber(e.target.value);
    console.log(e.target.value);
  };

  return <Keyboard selectNumber={selectNumber} selectSymbol={selectSymbol} />;
}
