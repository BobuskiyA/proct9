import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Advantages.scss";
import { useTranslation } from "react-i18next";

import slides from "./slider.json";
import { Slider } from "@/components/Slider/Slider";
import PopUp from "@/components/PopUp/PopUp";

export default function Advantages() {
  const { t } = useTranslation();

  return (
    <>
      <section className="advantages">
        <FullWidthBg classSection="advantages-section advantages-background">
          <img
            className="advantages-image"
            src="/images/advantages/background.jpg"
            alt=""
          />
          <div className="advantages__content">
            <h2 className="advantages__title">
              {t("We're proud of ourselves")}
              <span>{t("for that")}</span>
            </h2>
            <div className="advantages-slider">
              <Slider slides={slides} />
            </div>
          </div>
        </FullWidthBg>
      </section>
    </>
  );
}
