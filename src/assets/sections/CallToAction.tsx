import React, { Component } from "react";
//styles
import "../styles/sections/style_CallToAction.scss";
//components
import { ContactButton } from "../components/ContactButton";
//assets
import { Acseo_logo_2 } from "../images/logos/Acseo_logo_2";

export const CallToAction = () => {
  return (
    <div className="col-12 call-to-action call-to-action__head">
      <Acseo_logo_2 />
      <div className="sub-title-area">
        <h2>Une idéé un projet ?</h2>
        <h2>Nous sommes à votre disposition pour discuter</h2>
        <div className="sub-title-area__line action-bar"></div>
      </div>

      <ContactButton />
    </div>
  );
};
