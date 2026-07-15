import React from "react";
import "./hero-section.css";
import HeroPeople from "./hero-people";

const Herosection = () => {
  return (
    <div className="hero">
      <div className="hero-head">
        <h1>
          The thinkers and
          <br /> doers were changing <br />
          the status Quo with
        </h1>
        <h3>
          We are a team of strategists, designers communicators, researchers.
          Togeather,
          <br /> we belive that progress only hghappens when you refuse to play
          things safe.
        </h3>
      </div>
      <HeroPeople />
    </div>
  );
};

export default Herosection;
