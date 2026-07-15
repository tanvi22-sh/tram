import React from "react";
import "./desk-info.css";
export default function DeskInfo({ header, highlight, description }) {
  return (
    <div className="desk-info">
      <h1>
        {header} <span>{highlight}</span>
      </h1>
      <h3>{description}</h3>
      <a id="read">Read More --------</a>
    </div>
  );
}
