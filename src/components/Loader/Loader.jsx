import React, { useRef, useState } from "react";

import './Loader.scss';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { hideLoader, presenceAnim } from "./loaderAnim";

export const Loader = ({ setLoaderEnded }) => {
  const logoRef = useRef();
  const loaderRef = useRef();

  useGSAP(() => {
    if(logoRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setLoaderEnded(true)
      });

  const isWideScreen = window.innerWidth / window.innerHeight >= 15 / 9;

      gsap.set(logoRef.current, {
        scale: .2,
        yPercent: isWideScreen ? -100 : -300,
        opacity: 0,
        filter: "blur(1vw)",
      })

      tl.add(presenceAnim(logoRef.current), 0);
      tl.add(hideLoader(loaderRef.current));
    }
  }, [logoRef])

  return (
    <div className="loader" ref={loaderRef}>
      <img
        className="hero__logo loader__logo"
        src="/images/hero/hero-logo.png"
        alt="PROCT9"
        ref={logoRef}
      />
    </div>
  );
};
