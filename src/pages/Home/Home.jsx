import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Home.scss";
import { useIsPresent } from "framer-motion";
import { Transition } from "@/components/Transition/Transition";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <>
      <main className="home">
        <Hero />
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
