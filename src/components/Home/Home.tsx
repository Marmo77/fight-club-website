import Hero from "./Hero";
import Test from "../Test";
import Trainers from "./Trainers";

const Home = () => {
  return (
    <section className="mx-auto flex flex-col justify-center items-center">
      <Hero />
      <Trainers />
      <Test />
    </section>
  );
};

export default Home;
