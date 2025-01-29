import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar"; // Import the Navbar component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> {/* Include Navbar at the top */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl font-bold mt-4">Vite + React</h1>
        <div className="card p-4 mt-4 border rounded-lg shadow-md">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Count is {count}
          </button>
          <p className="mt-2">
            Edit <code>src/App.jsx</code> and save to test HMR.
          </p>
        </div>
        <p className="read-the-docs mt-4">
          Click on the Vite and React logos to learn more.
        </p>
      </div>
    </>
  );
}

export default App;
