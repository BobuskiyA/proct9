import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./Slider.scss";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export const Slider = ({ slides }) => {
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
          type: "fade",
          rewind: true,
          perPage: 1,
          pagination: false,
          arrows: false,
        }}
        onMoved={(splide) => setCurrentIndex(splide.index)}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="slide__content">
              <h4 className="slide__title">{slide.number}</h4>
              <p className="slide__subtitle">{slide.subTitle}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="custom__arrows">
        <button
          className={`custom__arrow prev ${
            currentIndex === 0 ? "disabled" : ""
          }`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <img src="/public/images/advantages/arrow.svg" alt="Prev" />
        </button>
        <button
          className={`custom__arrow next ${
            currentIndex === slides.length - 1 ? "disabled" : ""
          }`}
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
        >
          <img src="/public/images/advantages/arrow.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};
