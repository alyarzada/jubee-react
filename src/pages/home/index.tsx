import { useStore } from "../../app/store";

const Home = () => {
  const { incrementHandler, changeTextHandler, text, count } = useStore();

  return (
    <div>
      <h1 className="text-red-300 text-xl font-bold">
        Let's build App from scratch!
      </h1>
      <div className="mt-2">
        <button
          style={{ marginRight: "10px" }}
          className="border border-slate-500 px-4 py-1 rounded  border-solid"
          onClick={() => incrementHandler(5)}
        >
          {count}
        </button>
        <button
          className="border border-slate-500  px-4 py-1 rounded border-solid"
          onClick={() => changeTextHandler("new text")}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Home;
