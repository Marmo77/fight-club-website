import Hero from "./Hero";
import Test from "../Test";
import Trainers from "./Trainers";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <section className="mx-auto flex flex-col justify-center items-center">
      <Hero />
      <Trainers />
      <Schedule />
      <Test />
    </section>
  );
};

export default Home;
