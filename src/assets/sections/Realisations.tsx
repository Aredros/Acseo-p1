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

const slides = [
  {
    img: photoTF1,
    title: realisationsdata[0].title,
    tags: realisationsdata[0].tags,
    link: realisationsdata[0].link,
    logo: TF1,
  },
  {
    img: photoOnatera,
    title: realisationsdata[1].title,
    tags: realisationsdata[1].tags,
    link: realisationsdata[1].link,
    logo: Onatera,
  },
  {
    img: photoWever,
    title: realisationsdata[2].title,
    tags: realisationsdata[2].tags,
    link: realisationsdata[2].link,
    logo: Wever,
  },
];

const slidesContainerStyles = {
  height: "100%",
  transition: "transform ease-out 0.3s",
};

export const Realisations = () => {
  const timerRef = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parentContainerRef = useRef<HTMLDivElement | null>(null);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: 700 * slides.length,
    transform: `translateX(${-(currentIndex * 400)}px)`,
  });

  useEffect(() => {
    goToNext();
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);
    return () => clearTimeout(timerRef.current ?? undefined);
  }, [goToNext]);

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
            arrowClick={goToPrevious}
            isMirrored={true}
            isActive={true}
          />
          <ArrowCircleBig
            arrowClick={goToNext}
            isMirrored={false}
            isActive={false}
          />
        </div>

        <div className="col-12 realisations__content containerStyles">
          <div
            className="realisations__content__slider sliderStyles"
            // style={sliderStyles} ------------------------------
            ref={parentContainerRef}
          >
            <div className="realisations__content__slider__div">
              <div
                className="realisations__content__slider__div__div"
                style={getSlidesContainerStylesWithWidth()}
              >
                {slides.map((_, slideIndex) => (
                  <article
                    key={`realisations-article-${slideIndex}`}
                    className="card"
                    style={{
                      backgroundImage: `url(${slides[slideIndex].img})`,
                    }}
                  >
                    {" "}
                    <div className="slide-info">
                      <img src={slides[slideIndex].logo} />
                      <h3>{slides[slideIndex].title}</h3>
                      <p>{slides[slideIndex].tags}</p>
                    </div>
                    <ArrowCircleBig
                      // arrowClick={goToNext}
                      isMirrored={false}
                      isActive={true}
                    />
                  </article>
                ))}
              </div>
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
