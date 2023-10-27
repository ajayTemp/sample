import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Yellow");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="text-xl font-bold" style={{ textAlign: "center" }}>BG color change to : {color} </div>

        <div className="fixed flex flex-wrap justify-center top-12 px-2 inset-x-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("Red")}
            >
              Red
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("Green")}
            >
              Green
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("Blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
