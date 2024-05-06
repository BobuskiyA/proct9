import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Home.scss";
import { useIsPresent } from "framer-motion";
import { Transition } from "@/components/Transition/Transition";
import Hero from "@/pages/Home/Hero/Hero";
import Advantages from "./Advantages/Advantages";
import AboutTeam from "./AboutTeam/AboutTeam";
import Contact from "./Contact/Contact";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <>
      <main className="home">
        <Hero />
        <Advantages />
        <AboutTeam />
        <Contact />
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
