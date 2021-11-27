import "./GamePlayPage.css";
import { useState } from "react";

const GamePlayPage = () => {
  const [bonuses, setBonuses] = useState({
    easy: false,
    normal: false,
    hard: false,
  });

  const SetDifficultyEasy = () => {
    setBonuses({
      easy: true,
      normal: false,
      hard: false,
    });
  };

  const SetDifficultyNormal = () => {
    setBonuses({
      easy: false,
      normal: true,
      hard: false,
    });
  };

  const SetDifficultyHard = () => {
    setBonuses({
      easy: false,
      normal: false,
      hard: true,
    });
  };

  return (
    <div id="gamePlayPage">
      <div>
        <div className="columnBack">
          <h3>Bonuses</h3>
          <ul style={bonuses.easy ? { display: "block", color:"green" } : { display: "none" }} id="cevaceva">
            <li>No bonuses for this mode.</li>
          </ul>
          <ul
            style={bonuses.normal ? { display: "block", color:"green" } : { display: "none" }}
          >
            <li>50% more gold earned on win. 10% score boost.</li>
          </ul>
          <ul style={bonuses.hard ? { display: "block", color:"green" } : { display: "none" }}>
            <li>100% more gold earned on win. 25% score boost.</li>
          </ul>
        </div>
      </div>
      <div id="difficulties">
        <div
          id="easy"
          className={"difficulty " + (bonuses.easy ? "activated" : "")}
          onClick={SetDifficultyEasy}
        >
          Easy
        </div>
        <div
          id="normal"
          className={"difficulty " + (bonuses.normal ? "activated" : "")}
          onClick={SetDifficultyNormal}
        >
          Normal
        </div>
        <div
          id="hard"
          className={"difficulty " + (bonuses.hard ? "activated" : "")}
          onClick={SetDifficultyHard}
        >
          Hard
        </div>
        <button id="startButton" disabled>
          Start
        </button>
      </div>
      <div>
        <div className="columnBack">
          <h3>Challenges</h3>
          <ul style={bonuses.easy ? { display: "block", color:"red" } : { display: "none" }}>
            <li>No challenges for this mode.</li>
          </ul>
          <ul
            style={bonuses.normal ? { display: "block", color:"red" } : { display: "none" }}
          >
            <li>50% more enemy HP. 10% enemy damage boost.</li>
          </ul>
          <ul style={bonuses.hard ? { display: "block", color:"red" } : { display: "none" }}>
            <li>100% more enemy HP. 25% enemy damage boost.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamePlayPage;
