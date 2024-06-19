import React from 'react'

import "./Portfolio.scss";
import { t } from 'i18next';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/core";

import projectsData from "@/data/portfolio.json"

export default function Portfolio() {
  return (
    <section className="portfolio container">
      <h1 className="upperCase portfolio__title">Portfolio</h1>
      <Splide
        className="portfolio__slider"
        options={{
          type: "loop",
          rewind: true,
          rewindByDrag: true,
          slideFocus: true,
          keyboard: true,
          gap: "10%",
          rewind: true,
          perPage: 2,
          perMove: 1,
          pagination: false,
          classes: {
            arrows: "portfolio__arrows",
            arrow: "portfolio__arrow ",
            prev: "portfolio__arrow--prev prev",
            next: "portfolio__arrow--next next",
          },
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {projectsData.map((slide, index) => (
            <SplideSlide key={index} className="portfolio__content">
              <div className="portfolio__left">
                <img src={slide.image} alt="portfolio" className="portfolio__image"/>
                <h1 className="portfolio__name">{slide.name}</h1>
              </div>
              <p dangerouslySetInnerHTML={{ __html: slide.description }}/>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>

    </section>
  )
}
