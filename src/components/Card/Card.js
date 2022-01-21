import React from "react";
import Ellipsis from "../../images/Ellipsis";
import Work from "../../images/Work";
import workIcon from "../../images/oldIcons/icon-work.svg";
import "./Card.css";

export default function Card(props) {
  return (
    <main id="wrap">
      <section id="cardTop">
        <img src={workIcon} alt="work icon" id="work" />
      </section>

      {/* <div id="mainCardContainer">
        <section id="topCardColor">
          <div id="svg"></div>
        </section>

        <section id="cardContainer">
          <h3>{props.activity}</h3>
          <Ellipsis id="ellipsis" />
        </section>

        <section id="valueContainer">
          <h1>{props.value}hrs</h1>
        </section>

        <section id="timeContainer">
          <h6>
            <span id="time">{props.previous}</span> -{" "}
            <span id="hours">36hrs</span>
          </h6>
        </section>
      </div> */}
    </main>
  );
}
