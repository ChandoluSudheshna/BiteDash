import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const HooksDemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  // console.log("Render");

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-blue-400"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border-black border w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth prime: {prime}</h1>
      </div> 
    </div>
  );
};

export default HooksDemo;
 