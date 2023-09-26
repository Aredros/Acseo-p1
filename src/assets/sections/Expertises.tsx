import React, { Component } from "react";
//styles
import "../styles/sections/style_Expertises.scss";
//data
import expertisesdata from "../data/expertises-data.json";
//components
import { Expertises_icon_1 } from "../images/icons/Expertises_icon_1";
import { Expertises_icon_2 } from "../images/icons/Expertises_icon_2";
import { Expertises_icon_3 } from "../images/icons/Expertises_icon_3";
import { Expertises_icon_4 } from "../images/icons/Expertises_icon_4";
import { Expertises_icon_5 } from "../images/icons/Expertises_icon_5";
import { Expertises_icon_6 } from "../images/icons/Expertises_icon_6";
import { Expertises_icon_7 } from "../images/icons/Expertises_icon_7";
import { Expertises_icon_8 } from "../images/icons/Expertises_icon_8";

const iconComponents: {
  [key: number]: () => JSX.Element;
} = {
  1: Expertises_icon_1,
  2: Expertises_icon_2,
  3: Expertises_icon_3,
  4: Expertises_icon_4,
  5: Expertises_icon_5,
  6: Expertises_icon_6,
  7: Expertises_icon_7,
  8: Expertises_icon_8,
};

export const Expertises = () => {
  return (
    <section className="col-12 expertises">
      <div className="row ">
        <div className="col-12 expertises__head">
          <div className="sub-title-area">
            <h2>Nos expertises</h2>
            <div className="sub-title-area__line expertises-bar"></div>
          </div>

          <p className="title-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="col-12 expertises__content">
          <div className="row">
            {expertisesdata.map((expertise, index) => {
              const IconComponent = iconComponents[expertise.icon_n];
              return (
                <article
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 col-6 expertises__content__article"
                >
                  <IconComponent />
                  <h3>{expertise.title}</h3>
                  <p className="content-paragraph">{expertise.text}</p>
                  <a className="orange-link__small" href={expertise.link}>
                    En savoir plus
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
