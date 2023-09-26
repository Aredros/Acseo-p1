import React, { Component } from "react";
import { Acseo_logo_1 } from "../images/logos/Acseo_logo_1";
//styles
import "../styles/sections/style_PhoneHeader.scss";
//components
import { ContactButton } from "../components/ContactButton";

export const PhoneHeader = () => {
  return (
    <header className="col-12 main-header">
      <div>
        {" "}
        <Acseo_logo_1 />
        <nav>nav</nav>
        <ContactButton />
      </div>
    </header>
  );
};
