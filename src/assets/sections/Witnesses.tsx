import React, { useState, useRef } from "react";
//styles
import "../styles/sections/style_Witnesses.scss";
//data
import witnessesdata from "../data/witnesses-data.json";
//assets
import photoMartin from "../images/photos/witness_martin.png";
import photoMichele from "../images/photos/witness_michele.png";
import photoSophie from "../images/photos/witness_sophie.png";

const witnessSlides = [
  {
    img: photoMartin,
    text: witnessesdata[0].text,
    name: witnessesdata[0].name,
    role: witnessesdata[0].role,
  },
  {
    img: photoMichele,
    text: witnessesdata[1].text,
    name: witnessesdata[1].name,
    role: witnessesdata[1].role,
  },
  {
    img: photoSophie,
    text: witnessesdata[2].text,
    name: witnessesdata[2].name,
    role: witnessesdata[2].role,
  },
];

export const Witnesses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const getSlidesContainerStylesWithWidth = () => ({
    height: "100%",
    transition: "transform ease-out 0.3s",
    justifyContent: "center",
    // width: `${100 * witnessSlides.length}%`,
    // transform: `translateX(${-(currentIndex * (100 / witnessSlides.length))}%)`,
  });

  return (
    <section className="col-12 witnesses">
      <div className="row">
        <div className="col-12 witnesses__head">
          <div className="sub-title-area">
            <h2>Temoignages</h2>
            <div className="sub-title-area__line witness-bar"></div>
          </div>

          <p className="title-sub">Lorem ipsum</p>
        </div>
        <div className="col-12 mt-5 witnesses__content">
          <div className="justify-content-center witnesses__content__center">
            <div className="witnesses__content__center__div">
              <div
                className="witnesses__content__center__div__div "
                style={getSlidesContainerStylesWithWidth()}
              >
                {witnessSlides.map((_, slideIndex) => (
                  <article key={`witness-${slideIndex}`}>
                    <div className="witnesses__content__center__card">
                      <img src={witnessSlides[slideIndex].img} />
                      <p className="content-paragraph">
                        {witnessSlides[slideIndex].text}
                      </p>
                      <h3>{witnessSlides[slideIndex].name}</h3>
                      <h4>{witnessSlides[slideIndex].role}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="d-block d-lg-none witness-buttons">
              {witnessSlides.map((slide, slideIndex) => (
                <div
                  className="witness-buttons__button"
                  key={`witness-button-${slideIndex}`}
                  onClick={() => goToSlide(slideIndex)}
                >
                  ●
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
