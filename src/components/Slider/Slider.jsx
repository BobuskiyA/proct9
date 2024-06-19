import React, { useState, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "./Slider.scss";
import { useTranslation } from "react-i18next";
import "@splidejs/react-splide/css/core";

export const Slider = ({ slides }) => {
  const { t } = useTranslation();

  return (
    <div className="custom-slider">
      <Splide
        options={{
          type: "loop",
          rewind: true,
          rewindByDrag: true,
          slideFocus: true,
          keyboard: true,
          width: "60%",
          gap: "10%",
          rewind: true,
          perPage: 2,
          perMove: 1,
          pagination: false,
          classes: {
            arrows: "custom__arrows",
            arrow: "custom__arrow",
            prev: "custom__arrow--prev prev",
            next: "custom__arrow--next next",
          },
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="slide__content">
                <h4 className="slide__title">{t(slide.number)}</h4>
                <p className="slide__subtitle">{t(slide.subTitle)}</p>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};
