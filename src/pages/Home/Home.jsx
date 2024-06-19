import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Home.scss";
import { useIsPresent } from "framer-motion";
import { Transition } from "@/components/Transition/Transition";
import Hero from "@/pages/Home/Hero/Hero";
import Advantages from "./Advantages/Advantages";
import AboutTeam from "./AboutTeam/AboutTeam";
import Contact from "./Contact/Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Portfolio from "./Portfolio/Portfolio";

export default function Home() {
  const isPresent = useIsPresent();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(".hero", {
      scale: 1,
      filter: "blur(0vw)",
    }, {
      scale: 0.8,
      filter: "blur(0.5vw)",
      scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
  })

  return (
    <>
      <main className="home">
        <div className="home--paralax">
          <Hero />
          <Advantages />
        </div>
        <Portfolio />
        <AboutTeam />
        <Contact />
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
