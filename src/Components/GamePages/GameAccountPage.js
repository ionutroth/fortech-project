import "./GameAccountPage.css";
import Portret from "../../Assets/user_image.png";
import Credentials from "../../Context/Credentials";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router";

const GameAccountPage = () => {
  const ctx = useContext(Credentials);
  const navigate = useNavigate()

  useEffect(()=>{
    if( !ctx.userLoggedIn){
      navigate("/");
      alert("Hey!")
    }
  },[])

  return (
    <div id="gameAccount">
      <div className="gameAccountRow">
        <div className="gameAccountColumn" id="accountPortretDiv">
          <img src={Portret} id="accountPortret" />
        </div>
        <div className="gameAccountColumn" id="accountInfoDiv">
          <h2>Username: {ctx.currentUsername}</h2>
          <h4>Acount creation: {ctx.currentCreationDate}</h4>
        </div>
      </div>
      <hr />
      <div className="gameAccountRow">
        <div className="gameAccountColumn Stats" id="borderedColumn">
          <h2>Game details</h2>
          <h3>Funds: {ctx.currentFunds}</h3>
          <h3>Inventory size: {ctx.currentHeroesNumber} heroes bought</h3>
        </div>
        <div className="gameAccountColumn Stats">
          <h2>High Scores</h2>
          <h3>Hard: 0 (WIP)</h3>
          <h3>Normal: 0 (WIP)</h3>
          <h3>Easy: {ctx.currentHighscoreEasy}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameAccountPage;
