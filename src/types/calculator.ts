// src/types/calculator.ts

export type Operator = "+" | "-" | "x" | "÷";

export interface CalculatorState {
  display: string;
  prevValue: number | null;
  operator: Operator | null;
  waitingForOperand: boolean;
}

export const INITIAL_STATE: CalculatorState = {
  display: "0",
  prevValue: null,
  operator: null,
  waitingForOperand: false,
};
