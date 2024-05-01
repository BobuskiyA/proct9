import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Hero.scss";
import { useIsPresent } from "framer-motion";
import { LinkBtn } from "../Button/Button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero">
        <FullWidthBg
          classSection="hero-section"
          url="/images/hero/bachground.jpg"
        >
          <div className="hero__content">
            <div className="hero-socials">
              <LinkBtn classes="/" href="#">
                Instagram
              </LinkBtn>
              <LinkBtn classes="/" href="#">
                Behance
              </LinkBtn>
              <LinkBtn classes="/" href="#">
                Dribbble
              </LinkBtn>
            </div>
            <div className="hero__title">{t("Sites that sell emotion")}</div>
            <img
              className="hero__logo"
              src="/images/hero/hero-logo.png"
              alt="PROCT9"
            />
          </div>
        </FullWidthBg>
      </section>
    </>
  );
}
