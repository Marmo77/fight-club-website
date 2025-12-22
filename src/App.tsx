import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col mx-auto w-screen justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-2">
          <h1>FC {count}</h1>
          <h1 className="text-3xl text-red-500"> {count}</h1>
          <div className="flex gap-2">
            <Button variant={"destructive"} onClick={() => setCount(count + 1)}>
              Increment
            </Button>
            <Button
              variant={"outline"}
              className="hover:bg-gray-200 duration-200"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
