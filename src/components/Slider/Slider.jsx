import React, { useState, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "./Slider.scss";
import { useTranslation } from "react-i18next";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export const Slider = ({ slides }) => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef(null);

  const nextSlide = () => {
    if (splideRef.current) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < slides.length) {
        splideRef.current.go("+1");
        setCurrentIndex(nextIndex);
      }
    }
  };

  const prevSlide = () => {
    if (splideRef.current) {
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        splideRef.current.go("-1");
        setCurrentIndex(prevIndex);
      }
    }
  };

  return (
    <div className="custom-slider">
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          rewind: true,
          rewindByDrag: true,
          slideFocus: true,
          keyboard: true,
          // width: "60%",
          gap: "10%",
          rewind: true,
          perPage: 2,
          pagination: false,
          arrows: false,
        }}
        hasTrack={false}
        onMoved={(splide) => setCurrentIndex(splide.index)}
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

      <div className="custom__arrows">
        <button
          className={`custom__arrow prev ${
            currentIndex === 0 ? "disabled" : ""
          }`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <img src="/images/advantages/arrow.svg" alt="Prev" />
        </button>
        <button
          className={`custom__arrow next ${
            currentIndex === slides.length - 1 ? "disabled" : ""
          }`}
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
        >
          <img src="/images/advantages/arrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};
