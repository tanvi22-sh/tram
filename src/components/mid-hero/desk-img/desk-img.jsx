import React from "react";
import "./desk-img.css";

export default function DeskImg({ img, classname }) {
  return (
    <div>
      <img src={img} className={classname}></img>
    </div>
  );
}
