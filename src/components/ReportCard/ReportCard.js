import React from "react";
import './ReportCard.css'
import UserImg from "../../images/image-jeremy.png";

export default function ReportCard(props) {
  return (
    <div id="reportCardContainer">
      <section id="userContainer">
        <img src={UserImg} alt="this guy" />
        <p>Report for</p>
        <h2>Jeremy</h2>
        <h2>Robson</h2>
      </section>

      <section id="timeFrameContainer">
        <h6 onClick={(e)=>props.handleClick(e)} key="1">Daily</h6>
        <h6 onClick={(e)=>props.handleClick(e)} key="2">Weekly</h6>
        <h6 onClick={(e)=>props.handleClick(e)} key="3">Monthly</h6>
      </section>
    </div>
  );
}
