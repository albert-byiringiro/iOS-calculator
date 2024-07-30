interface KeyboardProps {
  display: string;
  onNumberInput: (num: string) => void;
  onPeratorInput: (op: string) => void;
  onEquals: () => void;
  onClear: () => void;
  onDecimal: () => void;
  onPercentage: () => void;
  onToggleSign: () => void;
}

export default function Keyboard() {
  return (
    <main>
      <p className="">Impundu</p>
    </main>
  );
}
