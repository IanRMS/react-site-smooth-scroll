import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <ServicesSection />
      <InfoSection {...homeObjectThree} />
      <Footer />
    </>
  );
};

export default Home;
