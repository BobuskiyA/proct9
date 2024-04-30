import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Hero.scss";
import { useIsPresent } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <FullWidthBg
          classSection="hero-section"
          url="../../../public/images/hero/bachground.jpg"
        >
          <div className="hero-conrainer container">
            <div className="hero__content">
              <div className="hero-socials">
                <a className="hero-social" href="#">
                  Instagram
                </a>
                <a className="hero-social" href="#">
                  Behance
                </a>
                <a className="hero-social" href="#">
                  Dribbble
                </a>
              </div>
              <div className="hero__title">Sites that sell emotion</div>
              <img
                className="hero-logo"
                src="../../../public/images/hero/hero-logo.png"
                alt="PROCT9"
              />
            </div>
          </div>
        </FullWidthBg>
      </section>
    </>
  );
}
