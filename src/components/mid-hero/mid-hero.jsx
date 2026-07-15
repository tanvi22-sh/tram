import React from "react";
import DeskInfo from "./desk-info/desk-info";
import "./mid-hero.css";
import DeskImg from "./desk-img/desk-img";

export default function MidHero() {
  return (
    <div className="mid-hero">
      <div className="para-1">
        <DeskInfo
          header={
            <>
              Tomorrow should
              <br />
              be better than
            </>
          }
          highlight="today"
          description={
            <>
              We are a team of strategists, designers, communicators,
              researchers.
              <br />
              Together, we believe that progress only happens when you refuse
              <br />
              to play things safe.
            </>
          }
        ></DeskInfo>
        <DeskImg img="images/desk-1.png" classname="desk-1"></DeskImg>
      </div>
      <div className="para-2">
        <DeskImg img="images/desk-2.png" classname="desk-1"></DeskImg>
        <DeskInfo
          header={
            <>
              See how we can
              <br />
              help you progress
            </>
          }
          description={
            <>
              We add a layer of fearless insights and action that allows change
              <br />
              makers to accelerate their progress in areas such as brand, design
              <br />
              digital, comms and social research.
            </>
          }
        ></DeskInfo>
      </div>
    </div>
  );
}
