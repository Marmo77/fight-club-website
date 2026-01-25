import Hero from "./Hero";
import Test from "../Test";
import Trainers from "./Trainers";
import Schedule from "./Schedule";
import Pricing from "./Pricing";
import Location from "./Location";

const Home = () => {
  return (
    <section className="mx-auto flex flex-col justify-center items-center">
      <Hero />
      <Trainers />
      <Schedule />
      <Pricing />
      <Location />
      <Test />
    </section>
  );
};

export default Home;
