export default function App() {
  return (
    <main className="grid max-w-[500px] mx-auto mt-4">
      <div className="py-8 bg-gray-500 relative">
        <span className="display-text text-6xl text-white absolute right-0 bottom-2 pr-2">
          0
        </span>
      </div>
      <form className="grid grid-cols-4">
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">AC</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">+/-</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">%</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center bg-orange-400 text-white">
          <button className="">/</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">7</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">8</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">9</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center bg-orange-400 text-white">
          <button className="">X</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">4</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">5</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">6</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center bg-orange-400 text-white">
          <button className=""> - </button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">1</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">2</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">3</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center bg-orange-400 text-white">
          <button className="">+</button>
        </label>{" "}
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center col-span-2">
          <button className="">0</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center">
          <button className="">.</button>
        </label>
        <label className="px-1 py-8 bg-gray-100 border-2 border-gray-600 text-3xl font-bold flex justify-center content-center bg-orange-400 text-white">
          <button className=""> = </button>
        </label>
      </form>
    </main>
  );
}
