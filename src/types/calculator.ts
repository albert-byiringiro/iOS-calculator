export type Operator = "+" | "-" | "x" | "÷";

export interface calculatorState {
  display: string;
  preValue: number | null;
  operator: Operator | null;
  waitingForOperand: boolean;
}

export const INITIAL_STATE: calculatorState = {
  display: "0",
  preValue: null,
  operator: null,
  waitingForOperand: false,
};

export const OPERATORS: Operator[] = ['+', '-', 'x', '÷'];