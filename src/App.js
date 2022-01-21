import "./App.css";
import React from "react";
import Data from "./data.json";
import Card from "./components/Card/Card";
import ReportCard from "./components/ReportCard/ReportCard";

function App() {
  //state variables
  const [cardInfo, setCardInfo] = React.useState(Data);

  const cardElements = cardInfo.map((i) => {
    return (
      <Card
        activity={i.title}
        value={i.timeframes.daily.current}
        previous={i.timeframes.daily.previous}
      />
    );
  });

  return (
    <div id="App">
      <div id="AppWrap">
        <ReportCard />
        {cardElements}
      </div>
    </div>
  );
}

export default App;
