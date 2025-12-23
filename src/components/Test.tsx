import { useState } from "react";
import { Button } from "./ui/button";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col pt-24 mx-auto max-w-6xl justify-center items-center">
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
        <div className="flex flex-col gap-12">
          <h1 className="font-sans">Test text 123 font </h1>
          <h1 className="font-heading">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
          <h1 className="font-secondary">Test text 123 font </h1>
        </div>
      </div>
    </div>
  );
};

export default Test;
