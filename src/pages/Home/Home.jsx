import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Home.scss";
import { useIsPresent } from "framer-motion";
import { Transition } from "@/components/Transition/Transition";
import Hero from "@/pages/Home/Hero/Hero";
import Advantages from "./Advantages/Advantages";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <>
      <main className="home">
        <Hero />
        <Advantages />
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
