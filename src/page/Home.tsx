import React from "react";
import Hero from "../components/Hero";
import FirstSection from "../components/FirstSection";
import SpecialService from "../components/SpecialService";
import BeforeAndAfter from "../components/BeforeAndAfter";

const Home = () => {
  return (
    <div className="font-garamond">
      <Hero />
      <FirstSection />
      <SpecialService />
      <BeforeAndAfter />
    </div>
  );
};

export default Home;
