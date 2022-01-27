import React from "react";
// import Ellipsis from "../../images/oldIcons/icon-ellipsis.svg";
// import workIcon from "../../images/oldIcons/icon-work.svg";
import "./Card.css";

export default function Card(props) {
  return (
    <main id="mainCardContainer">
      <div id="cardTop"></div>

      <div id="cardBottom">
        <section id="cardContainer">
          <h3>{props.activity}</h3>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
          {/* <img src={Ellipsis} alt="Ellipsis" id="Ellipsis" /> */}
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
