import "./App.css";
import React from "react";
import Data from "./data.json";
import Card from "./components/Card/Card";
import ReportCard from "./components/ReportCard/ReportCard";
import Exercise from "./images/oldIcons/icon-exercise.svg";
import Play from "./images/oldIcons/icon-play.svg";
import SelfCare from "./images/oldIcons/icon-self-care.svg";
import Social from "./images/oldIcons/icon-social.svg";
import Study from "./images/oldIcons/icon-study.svg";
import Work from "./images/oldIcons/icon-work.svg";
import { nanoid } from "nanoid";

function App() {
  //state variables
  const [cardInfo, setCardInfo] = React.useState(Data);
  const [time, setTime] = React.useState("");
  const [selected, setSelected] = React.useState("");

  const BGArr = [Exercise, Play, SelfCare, Social, Study, Work];

  // making all of the card elements
  const cardElements = cardInfo.map((i) => {
    

    return (
      <Card
        key={nanoid}
        icon={BGArr[1]} //trying to loop through all my icons.svg
        activity={i.title}
        time={time}
        selected={selected}
        current={i.timeframes.weekly.current}
        previous={i.timeframes.weekly.previous}
      />
    );
  });

  // changing the time variable based on which timeframe is selected
  function changeTimeframe(e) {
    const timeframe = e.target.firstChild.data;
    if (timeframe === "Daily") {
      setTime("Yesterday");
      setSelected(timeframe);
    } else if (timeframe === "Weekly") {
      setTime("Last Week");
      setSelected(timeframe);
    } else if (timeframe === "Monthly") {
      setTime("Last Month");
      setSelected(timeframe);
    }
  }

  return (
    <div id="App">
      <div id="AppWrap">
        <ReportCard handleClick={changeTimeframe} />
        {cardElements}
      </div>
    </div>
  );
}

export default App;
