import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoNav from "./components/LogoNav";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <LogoNav />
      <Hero/>
      <Navbar />

    </>
  );
}

export default App;
