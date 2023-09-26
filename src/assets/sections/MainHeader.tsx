import React, { Component } from "react";
import { Acseo_logo_1 } from "../images/logos/Acseo_logo_1";
//styles
import "../styles/sections/style_MainHeader.scss";
//components
import { ContactButton } from "../components/ContactButton";
import { MenuExperiences } from "../components/MenuDeroulant/MenuExperiences";
import { MenuTechnologies } from "../components/MenuDeroulant/MenuTechnologies";
import { MenuRealisations } from "../components/MenuDeroulant/MenuRealisations";
import { MenuAgences } from "../components/MenuDeroulant/MenuAgences";
import { Menu_icon } from "../images/icons/menu_icon";
import { Email_logo } from "../images/logos/Email_logo";

export const MainHeader = () => {
  return (
    <header className="row main-header">
      <div className="d-none d-lg-block col-lg-12 primary-menu ">
        {" "}
        <Acseo_logo_1 />
        <nav>
          <div className="menu-element-div">
            <a>Experiences</a>
            <MenuExperiences />
          </div>
          <div className="menu-element-div">
            <a>Technologies & CMS</a>
            <MenuTechnologies />
          </div>

          <div className="menu-element-div">
            <a>Realisations</a>
            <MenuRealisations />
          </div>

          <div className="menu-element-div">
            <a>Agences</a>
            <MenuAgences />
          </div>

          <div className="menu-element-div"></div>
          <a>Equipe</a>

          <a>Blog</a>
        </nav>
        <ContactButton />
      </div>
      <div className="d-block d-lg-none col-12 phone-menu">
        <div className="row">
          <div className="col-3 phone-menu__menu">
            <Menu_icon />
          </div>
          <div className="col-6 phone-menu__logo">
            <Acseo_logo_1 />
          </div>
          <div className="col-3 phone-menu__email">
            <Email_logo blackVblue={true} />
          </div>
        </div>
      </div>
    </header>
  );
};
