import React from "react";
import Ellipsis from "../../images/oldIcons/icon-ellipsis.svg";
import workIcon from "../../images/oldIcons/icon-work.svg";
import "./Card.css";

export default function Card(props) {
  const prevTimeframe = "";
  if (props.time === "Daily") {
    return "Yesterday";
  } else if (props.time === "Weekly") {
    return "Last Week";
  } else if (props.time === "Monthly") {
    return "Last Month";
  }

  console.log(props.icon)

  return (
    <main id="mainCardContainer">
      <div id="cardTop">
      </div>

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
        </section>

        <section id="valueContainer">
          <h1>{props.current}hrs</h1>
        </section>

        <section id="timeContainer">
          {props.time && (
            <h6>
              <span id="time">{props.time}</span> -{" "}
              <span id="hours">{props.previous}</span>
            </h6>
          )}
        </section>
      </div>
    </main>
  );
}
