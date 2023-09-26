import React, { Component } from "react";
//styles
import "../../styles/components/style_menu-deroulant.scss";

export const MenuTechnologies = () => {
  return (
    <div className="menu-deroulant">
      <div className="menu-orange-line"></div>
      <div className="menu-deroulant__links double-menu">
        {" "}
        <div className="break-menu">
          <p>Technologies</p>
          <a>PHP / Symphony</a>
          <a>Vue / JS</a>
          <a>Angular</a>
          <a>Node JS</a>
          <a>React</a>
          <a>React Native</a>
        </div>
        <div className="break-menu">
          <p>CMS</p>
          <a>Wordpress</a>
          <a>Sylius</a>
          <a>Shopify</a>
          <a>Woocommerce</a>
          <a>Prestashop</a>
        </div>
      </div>
    </div>
  );
};
