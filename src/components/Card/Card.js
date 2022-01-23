import React from "react";
import Ellipsis from "../../images/oldIcons/icon-ellipsis.svg";
import workIcon from "../../images/oldIcons/icon-work.svg";
import "./Card.css";

export default function Card(props) {
  return (
    <main id="mainCardContainer">
      <div id="cardTop"></div>

      <div id="cardBottom">
        <section id="cardContainer">
          <h3>{props.activity}</h3>
          <img src={Ellipsis} alt="Ellipsis" id="Ellipsis" />
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
      </div>
    </main>
  );
}
