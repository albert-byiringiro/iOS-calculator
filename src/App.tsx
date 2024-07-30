import { useState } from "react";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [symbol, setSymbol] = useState("");

  const selectNumber = (e) => {
    e.preventDefault();
    setSelectedNumber(e.target.value);
    console.log(e.target.value);
  };

  const selectSymbol = (e) => {
    e.preventDefault();
    setSelectedNumber(e.target.value);
    console.log(e.target.value);
  };

  return (
    <main className="grid max-w-[500px] mx-auto mt-4">
      <div className="py-8 bg-gray-500 relative">
        <span className="display-text text-6xl text-white absolute right-0 bottom-2 pr-2">
          0
        </span>
      </div>
      <form className="grid grid-cols-4">
        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"AC"}
          onClick={(e) => selectSymbol(e)}
        >
          AC
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"±"}
          onClick={(e) => selectSymbol(e)}
        >
          ±
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"%"}
          onClick={(e) => selectSymbol(e)}
        >
          %
        </button>

        <button
          className="px-1 hover:bg-[#dfb07e] py-8  border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer bg-orange-400 text-white"
          value={"÷"}
          onClick={(e) => selectSymbol(e)}
        >
          ÷
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"7"}
          onClick={(e) => selectNumber(e)}
        >
          7
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"8"}
          onClick={(e) => selectNumber(e)}
        >
          8
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"9"}
          onClick={(e) => selectNumber(e)}
        >
          9
        </button>

        <button
          className="px-1 hover:bg-[#dfb07e] py-8  border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer bg-orange-400 text-white"
          value={"x"}
          onClick={(e) => selectSymbol(e)}
        >
          x
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"4"}
          onClick={(e) => selectNumber(e)}
        >
          4
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"5"}
          onClick={(e) => selectNumber(e)}
        >
          5
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"6"}
          onClick={(e) => selectNumber(e)}
        >
          6
        </button>

        <button
          className="px-1 hover:bg-[#dfb07e] py-8 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer bg-orange-400 text-white"
          value={"-"}
          onClick={(e) => selectSymbol(e)}
        >
          -
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"1"}
          onClick={(e) => selectNumber(e)}
        >
          1
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"2"}
          onClick={(e) => selectNumber(e)}
        >
          2
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"3"}
          onClick={(e) => selectNumber(e)}
        >
          3
        </button>

        <button
          className="px-1 hover:bg-[#dfb07e] py-8 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer bg-orange-400 text-white"
          value={"+"}
          onClick={(e) => selectSymbol(e)}
        >
          +
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer col-span-2"
          value={"0"}
          onClick={(e) => selectNumber(e)}
        >
          0
        </button>

        <button
          className="px-1 hover:bg-[#ebebeb] py-8 bg-[#d8d9db] border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer"
          value={"."}
          onClick={(e) => selectSymbol(e)}
        >
          .
        </button>

        <button
          className="px-1 hover:bg-[#dfb07e] py-8  border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center cursor-pointer bg-orange-400 text-white"
          value={"="}
          onClick={(e) => selectSymbol(e)}
        >
          =
        </button>
      </form>
    </main>
  );
}
