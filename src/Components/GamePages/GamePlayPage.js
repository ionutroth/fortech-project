import "./GamePlayPage.css";
import { useState,useEffect,useContext } from "react";
import Credentials from "../../Context/Credentials";
import { useNavigate } from "react-router";
import { GiDeathSkull,GiBroadsword,GiAxeSword } from "react-icons/gi";

const GamePlayPage = () => {
  const ctx = useContext(Credentials);
  const navigate = useNavigate();
  const [playButtonDisabled, setPlayButtonDisabled] = useState(true);
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
    setPlayButtonDisabled(false);
  };

  const SetDifficultyNormal = () => {
    alert("Sorry! This difficulty is not yet implemented...")
  };

  const SetDifficultyHard = () => {
    alert("Sorry! This difficulty is not yet implemented...")
  };

  useEffect(()=>{
    if( !ctx.userLoggedIn){
      navigate("/");
      alert("Hey!")
    }
  },[])

  const Play = () =>{
    if (ctx.currentTeam.length>0){
      navigate("/game/menu/easy")
    }else{
      alert("Pick a team first.")
    }
    
  }

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
          <GiBroadsword/> Easy <GiBroadsword/> 
        </div>
        <div
          id="normal"
          className={"difficulty " + (bonuses.normal ? "activated" : "")}
          onClick={SetDifficultyNormal}
        >
          <GiAxeSword size={24} /> Normal <GiAxeSword size={24}/> 
          
        </div>
        <div
          id="hard"
          className={"difficulty " + (bonuses.hard ? "activated" : "")}
          onClick={SetDifficultyHard}
        >
          <GiDeathSkull/> Hard <GiDeathSkull/>
        </div>
        <button id="startButton" disabled={playButtonDisabled} onClick={Play} >
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
