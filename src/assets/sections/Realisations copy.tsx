import React, { useEffect, useState, useRef, useCallback } from "react";
//styles
import "../styles/sections/style_Realisations.scss";
//data
import realisationsdata from "../data/realisations-data.json";
//assets
import TF1 from "../images/logos/TF1_logo.png";
import Onatera from "../images/logos/onatera_logo.png";
import Wever from "../images/logos/wever_logo.png";
import photoTF1 from "../images/photos/realisations_tf1.png";
import photoOnatera from "../images/photos/realisations_onatera.png";
import photoWever from "../images/photos/realisations_wever.png";
//
import { ArrowCircleBig } from "../components/ArrowCircleBig";

const slides = [photoTF1, photoOnatera, photoWever];

export const Realisations = () => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parentContainerRef = useRef<HTMLDivElement | null>(null);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="col-12 realisations">
      <div className="row">
        <div className="col-12 realisations__head">
          <div className="sub-title-area">
            <h2>Nos réalisations</h2>
            <div className="sub-title-area__line realisations-bar"></div>
          </div>

          <p className="title-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <ArrowCircleBig
            // arrowClick={goToPrevious}
            isMirrored={true}
            isActive={true}
          />
          <ArrowCircleBig
            // arrowClick={goToNext}
            isMirrored={false}
            isActive={false}
          />
        </div>

        <div className="col-12 realisations__content containerStyles">
          <div
            className="row realisations__content__slider"
            // style={sliderStyles} ------------------------------
            ref={parentContainerRef}
          >
            {realisationsdata.map((realisation, index) => (
              <article
                key={`realisation-${index}`}
                className="col-lg-5 col-md-12 col-sm-12 card"
                style={{
                  backgroundImage: `url(${slides[index]})`,
                }}
              >
                <div className="slide-info">
                  <img
                    src={
                      realisation.logo === "TF1"
                        ? TF1
                        : realisation.logo === "Onatera"
                        ? Onatera
                        : Wever
                    }
                  />
                  <h3>{realisation.title}</h3>
                  <p>{realisation.tags}</p>
                </div>
                <ArrowCircleBig
                  // arrowClick={goToNext}
                  isMirrored={false}
                  isActive={true}
                />
              </article>
            ))}
            <div
            //  style={dotsContainerStyles}
            >
              {/* {slides.map((slide, slideIndex) => (
                <div
                  style={dotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                  ●
                </div>
              ))} */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a className="orange-link__big">Voir toutes les realisations</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
