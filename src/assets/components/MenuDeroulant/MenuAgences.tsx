import React, { Component } from "react";
//styles
import "../../styles/components/style_menu-deroulant.scss";

export const MenuAgences = () => {
  return (
    <div className="menu-deroulant">
      <div className="menu-orange-line"></div>
      <div className="menu-deroulant__links">
        {" "}
        <a>Aix-en-Provence</a>
        <a>Montpellier</a>
        <a>Paris</a>
      </div>
    </div>
  );
};
