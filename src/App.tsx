// src/App.tsx
import React, { useReducer } from "react";
import Keyboard from "./components/Keyboard";
import { calculatorReducer } from "./reducers/calculatorReducer";
import { INITIAL_STATE } from "./types/calculator";

export default function App() {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);

  return <Keyboard display={state.display} dispatch={dispatch} />;
}
