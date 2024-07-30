import Button from "./Button";

interface KeyboardProps {
  display: string;
  onNumberInput: (num: string) => void;
  onOperatorInput: (op: string) => void;
  onEquals: () => void;
  onClear: () => void;
  onDecimal: () => void;
  onPercentage: () => void;
  onToggleSign: () => void;
}

export default function Keyboard({
  display,
  onNumberInput,
  onOperatorInput,
  onEquals,
  onClear,
  onDecimal,
  onPercentage,
  onToggleSign,
}: KeyboardProps) {
  return (
    <main className="max-w-[400px] mx-auto mt-4">
      {/* display area */}
      <div className="bg-gray-700 p-4 text-right">
                <span className="text-white text-6xl">{display}</span>
      </div>
      {/* button grid */}
      <div className="grid grid-cols-4">
        {/* top row */}
        <Button value="AC" onClick={onClear} className="bg-gray-300" />
        <Button value="±" onClick={onToggleSign} className="bg-gray-300" />
        <Button value="%" onClick={onPercentage} className="bg-gray-300" />
        <Button
          value="÷"
          onClick={() => onOperatorInput("÷")}
          className="bg-orange-400 text-white"
        />
        {[7, 8, 9].map((num) => (
          <Button
            key={num}
            value={String(num)}
            onClick={() => onNumberInput(String(num))}
            className="bg-gray-300"
          />
        ))}
        <Button
          value="x"
          onClick={() => onOperatorInput("x")}
          className="bg-orange-400 text-white"
        />
        {[4, 5, 6].map((num) => (
          <Button
            key={num}
            value={String(num)}
            onClick={() => onNumberInput(String(num))}
            className="bg-gray-300"
          />
        ))}
        <Button
          value="-"
          onClick={() => onOperatorInput("-")}
          className="bg-orange-400 text-white"
        />
        {[1, 2, 3].map((num) => (
          <Button
            key={num}
            value={String(num)}
            onClick={() => onNumberInput(String(num))}
            className="bg-gray-300"
          />
        ))}
        <Button
          value="+"
          onClick={() => onOperatorInput("+")}
          className="bg-orange-400 text-white"
        />
                {/* Bottom row */}
        <Button
          value="0"
          onClick={() => onNumberInput("0")}
          className="bg-gray-300"
          span={2}
        />
                <Button value="." onClick={onDecimal} className="bg-gray-300" />
        <Button
          value="="
          onClick={onEquals}
          className="bg-orange-400 text-white"
        />
      </div>
    </main>
  );
}
