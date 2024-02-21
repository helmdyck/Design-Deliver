import "./App.css";
import Navbar from "./components/Navbar";
import LogoNav from "./components/LogoNav";
import Hero from "./components/Hero";
import PastClients from "./components/PastClients";
import ClientProblem from "./components/ClientProblem";
import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <LogoNav />
      <Hero/>
      <PastClients/>
      <ClientProblem/>
      <Testimonial/>
      <HowItWorks/>
      <Navbar />

    </>
  );
}

export default App;
