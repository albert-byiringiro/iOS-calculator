export default function App() {
  return (
    <main className="grid max-w-[500px] mx-auto mt-4">
      <div className="py-8 bg-gray-500 relative">
        <span className="display-text text-6xl text-white absolute right-0 bottom-2 pr-2">
          0
        </span>
      </div>
      <form className="grid grid-cols-4">
        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          AC
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          +/-
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          %
        </button>

        <button className="px-1 py-8  border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center bg-orange-500 text-white">
          /
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          7
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          8
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          9
        </button>

        <button className="px-1 py-8  border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center bg-orange-500 text-white">
          X
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          4
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          5
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          6
        </button>

        <button className="px-1 py-8 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center bg-orange-500 text-white">
          -
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          1
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          2
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          3
        </button>

        <button className="px-1 py-8 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center bg-orange-500 text-white">
          +
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center col-span-2">
          0
        </button>

        <button className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center">
          .
        </button>

        <button className="px-1 py-8  border-2 border-gray-600 text-3xl font-semibold flex justify-center content-center bg-orange-500 text-white">
          =
        </button>
      </form>
    </main>
  );
}
