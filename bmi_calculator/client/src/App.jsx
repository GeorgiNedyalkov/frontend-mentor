import Benefits from "./components/Benefits/Benefits";
import CalculatorBMI from "./components/CalculatorBMI/CalculatorBMI";
import Hero from "./components/Hero/Hero";
import Limitations from "./components/Limitations/Limitations";

function App() {
  return (
    <main>
      <Hero />
      <CalculatorBMI />
      <Benefits />
      <Limitations />
    </main>
  );
}

export default App;
