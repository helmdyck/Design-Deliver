import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoNav from "./components/LogoNav";
import Hero from "./components/Hero";
import PastClients from "./components/PastClients";

function App() {
  return (
    <>
      <LogoNav />
      <Hero/>
      <PastClients/>
      <Navbar />

    </>
  );
}

export default App;
