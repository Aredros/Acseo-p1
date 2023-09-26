import React, { Component } from "react";
import { Acseo_banner_image_1 } from "../images/logos/Acseo_banner_image_1";
//styles
import "../styles/sections/style_TitleBanner.scss";
//components
import { ContactButton } from "../components/ContactButton";

export const TitleBanner = () => {
  return (
    <section className="col-12 pt-5 pb-5 title-banner">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center title-banner__left">
          <div>
            {" "}
            <div className="title-area">
              <h1>
                PROJETS WEB
                <br /> ET MOBILES
              </h1>
              <div className="title-banner__line"></div>
              <div className="title-banner__line2"></div>
            </div>
            <p className="title-sub">
              Depuis 2009, nous concevons et réalisons des applications web et
              mobiles complexes à forte valeur ajoutée, avec la conviction que
              les nouvelles technologies sont un facilitateur d'innovation.
            </p>
            <ContactButton />
          </div>
        </div>
        <div className="col-6 d-none d-lg-block title-banner__right">
          <Acseo_banner_image_1 />
        </div>
      </div>
    </section>
  );
};
