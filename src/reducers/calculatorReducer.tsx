// src/reducers/calculatorReducer.ts
import { CalculatorState, Operator, INITIAL_STATE } from "../types/calculator";

type Action =
  | { type: "INPUT_NUMBER"; payload: string }
  | { type: "INPUT_OPERATOR"; payload: Operator }
  | { type: "CALCULATE" }
  | { type: "CLEAR" }
  | { type: "INPUT_DECIMAL" }
  | { type: "CALCULATE_PERCENTAGE" }
  | { type: "TOGGLE_SIGN" };

const calculateResult = (a: number, b: number, op: Operator): number => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "÷":
      return b !== 0 ? a / b : NaN;
  }
};

export const calculatorReducer = (
  state: CalculatorState,
  action: Action,
): CalculatorState => {
  switch (action.type) {
    case "INPUT_NUMBER":
      return {
        ...state,
        display: state.waitingForOperand
          ? action.payload
          : state.display === "0"
            ? action.payload
            : state.display + action.payload,
        waitingForOperand: false,
      };

    case "INPUT_OPERATOR":
      const inputValue = parseFloat(state.display);
      if (state.prevValue === null) {
        return {
          ...state,
          prevValue: inputValue,
          operator: action.payload,
          waitingForOperand: true,
        };
      } else if (state.operator) {
        const result = calculateResult(
          state.prevValue,
          inputValue,
          state.operator,
        );
        return {
          ...state,
          display: String(result),
          prevValue: result,
          operator: action.payload,
          waitingForOperand: true,
        };
      }
      return state;

    case "CALCULATE":
      if (state.prevValue !== null && state.operator) {
        const result = calculateResult(
          state.prevValue,
          parseFloat(state.display),
          state.operator,
        );
        return {
          ...INITIAL_STATE,
          display: String(result),
          waitingForOperand: true,
        };
      }
      return state;

    case "CLEAR":
      return INITIAL_STATE;

    case "INPUT_DECIMAL":
      return {
        ...state,
        display: state.display.includes(".")
          ? state.display
          : state.display + ".",
        waitingForOperand: false,
      };

    case "CALCULATE_PERCENTAGE":
      return {
        ...state,
        display: String(parseFloat(state.display) / 100),
        waitingForOperand: true,
      };

    case "TOGGLE_SIGN":
      return {
        ...state,
        display: String(-parseFloat(state.display)),
      };

    default:
      return state;
  }
};
