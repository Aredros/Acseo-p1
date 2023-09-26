import React, { Component } from "react";
//styles
import "../styles/sections/style_MainFooter.scss";
//assets
import { Acseo_logo_3 } from "../images/logos/Acseo_logo_3";
import { Linkeding_logo } from "../images/logos/Linkedin_logo";
import { Email_logo } from "../images/logos/Email_logo";

export const MainFooter = () => {
  return (
    <footer className="row main-footer">
      <div className="col-12 main-footer__upper-footer">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-column logo-social-column">
            <Acseo_logo_3 />
            <h4 className="mb-0">SIEGE SOCIAL</h4>
            <p>1060 rue René Descartes</p>
            <p>13290 | Aix-en-Provence</p>
            <p>04 42 38 70 46</p>
            <div className="logo-social-column__logos mt-3">
              <Linkeding_logo /> <Email_logo />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-column nav-footer-column">
            <h4 className="mt-0">A propos</h4>
            <nav>
              <a>Technologies & CMS</a>
              <a>Réalisations</a>
              <a>Blog</a>
              <a>Contactez-nous</a>
              <a>Nous rejoindre</a>
            </nav>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-column nav-footer-column">
            <h4 className="mt-0">EXPERTISES</h4>
            <nav>
              {" "}
              <a>Conseil en stratégie digitale</a>
              <a>Design et UX</a>
              <a>Développement Web</a>
              <a>Application mobile</a>
              <a>E-commerce</a>
            </nav>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-column nav-footer-column">
            <h4 className="mt-0">LES AGENCES ACSEO</h4>
            <nav>
              {" "}
              <a>L'agence d'Aix-en-Provence</a>
              <a>L'agence de Montpellier</a>
              <a>L'agence de Paris</a>
              <a>Equipe</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="col-12 main-footer__under-footer">
        <p>© ACSEO 2021 | Tous droits réservés</p>
        <p>Politique de confidentialité | Mentions légales</p>
      </div>
    </footer>
  );
};
