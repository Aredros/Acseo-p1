import React, { Component } from "react";
//styles
import "../styles/sections/style_Technologies.scss";
//assets
import SymphonyLogo from "../images/logos/sym_logo.png";
import ReactLogo from "../images/logos/reactblanc_logo.png";
import NodeJsLogo from "../images/logos/nodejs_logo.png";
import VueLogo from "../images/logos/Vue_logo.png";

export const Technologies = () => {
  return (
    <section className="col-12 technologies">
      <div className="row g-0">
        <div className="col-12 technologies__head">
          <div className="sub-title-area">
            <h2>Les meilleures technologies</h2>
            <div className="sub-title-area__line technologies-bar"></div>
          </div>

          <p className="title-sub">Lorem ipsum</p>
        </div>
        <div className="col-12 technologies__content">
          <div className="row">
            {" "}
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 tech-column"
              style={{ background: "black" }}
            >
              <img src={SymphonyLogo} className="img-fluid__symphony" />
              <h3>Symphony</h3>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 tech-column"
              style={{ background: "#62dafb" }}
            >
              <img src={ReactLogo} className="img-fluid__react" />
              <h3>React & React Native</h3>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 tech-column"
              style={{ background: "#83cd29" }}
            >
              <img src={NodeJsLogo} className="img-fluid__node" />
              <h3>NodeJs</h3>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 tech-column"
              style={{ background: "#42b883" }}
            >
              <img src={VueLogo} className="img-fluid__vue" />
              <h3>Vue</h3>
            </div>
            <a className="orange-link__big pt-5">
              Voir toutes les technologies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
