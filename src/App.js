//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import ScoreBoard from './components/scoreboard-component/Scoreboard.js';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      {/* create props to pass variables to Scoreboard function component */}
      <ScoreBoard homeScore={homeScore} awayScore={awayScore} />

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {
            setHomeScore(homeScore + 7)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {
            setHomeScore(homeScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {
            setAwayScore(awayScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {
            setAwayScore(awayScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
