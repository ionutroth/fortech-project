import "./AccountPage.css";
import Body from "../Shared/Body.js";
import Credentials from "../../Context/Credentials";
import { useContext } from "react";

const AccountPage = () => {
  const ctx = useContext(Credentials);

  return (
    <Body>
      <div id="AccountPage">
        <h1>Account details</h1>
        <hr/>
        <h4>Name: {ctx.currentUser}</h4>
        <h4>Username: {ctx.currentUsername}</h4>
        <h4>Email: {ctx.currentEmail}</h4>
        <h4>Account creation date: {ctx.currentCreationDate}</h4>
        <h1>Account game details</h1>
        <hr/>
        <h4>Funds: {ctx.currentFunds}</h4>
        <h4>Number of heroes owned: {ctx.currentHeroesNumber}</h4>
        <h4>High score (EASY) : {ctx.currentHighscoreEasy}</h4>
        <h4>High score (NORMAL) : {ctx.currentHighscoreNormal}</h4>
        <h4>High score (HARD) : {ctx.currentHighscoreHard}</h4>
        <h1>Posible actions</h1>
        <hr/>
        <button id="editAccount">Edit account</button>
      <button id="deleteAccount">Delete account</button>
      </div>
      
      
    </Body>
  );
};

export default AccountPage;
