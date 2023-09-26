import React, { Component } from "react";
//styles
import "../../styles/components/style_menu-deroulant.scss";

export const MenuRealisations = () => {
  return (
    <div className="menu-deroulant">
      <div className="menu-orange-line"></div>
      <div className="menu-deroulant__links">
        {" "}
        <a>Industrie</a>
        <a>Santé</a>
        <a>Médias</a>
        <a>Institutionnels</a>
        <a>IOT</a>
        <a>Start-ups</a>
        <a>E-commerce</a>
      </div>
    </div>
  );
};
