import { useEffect, useRef, useState } from "react";

const DemoUseRef = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  //   console.log(ref);

  console.log("Rendering...");

    const i = useRef(null);

  useEffect(() => {
     i.current = setInterval(() => {
      console.log("Hello", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div>
      <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">let = {x}</span>
        <br></br>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
        <br></br>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = ", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
        <button 
        onClick={() => {clearInterval(i.current)}}
        className="bg-red-900 p-4 m-4 text-white font-bold rounded">
          Stop
        </button>
      </div>
    </div>
  );
};

export default DemoUseRef;
