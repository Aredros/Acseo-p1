import React, { Component } from "react";
//styles
import "../../styles/components/style_menu-deroulant.scss";

export const MenuExperiences = () => {
  return (
    <div className="menu-deroulant">
      <div className="menu-orange-line"></div>
      <div className="menu-deroulant__links">
        <a>Conseil en stratégie digitale</a>
        <a>Design & UK</a>
        <a>Développment Web</a>
        <a>Application mobile</a>
        <a>E-commerce</a>
        <a>Innovation</a>
        <a>Centre de service</a>
        <a>Programme de startup</a>
      </div>
    </div>
  );
};
