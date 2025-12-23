import React from "react";
import Hero from "./Hero";
import Test from "../Test";

const Home = () => {
  return (
    <section className="mx-auto flex flex-col justify-center items-center">
      <Hero />
      <Test />
    </section>
  );
};

export default Home;
