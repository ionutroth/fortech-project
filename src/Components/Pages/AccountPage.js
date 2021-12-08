import "./AccountPage.css";
import Body from "../Shared/Body.js";
import Credentials from "../../Context/Credentials";
import { useContext, useState,useEffect } from "react";
import { db, auth } from "../../Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where
} from "@firebase/firestore";
import { useNavigate } from "react-router";
import { deleteUser } from "@firebase/auth";


const AccountPage = () => {
  const ctx = useContext(Credentials);
  const navigate = useNavigate();
  const [displayForm, setDisplayForm] = useState({ display: "none" });
  const [name, setName] = useState(ctx.currentUser);
  const [username, setUsername] = useState(ctx.currentUsername);

  useEffect(()=>{
    if( !ctx.userLoggedIn){
      navigate("/");
      alert("Hey!")
    }
  },[])

  const DeleteAccount = async () => {
    const heroesRef = await collection(db, "Heroes");
    const heroesQuery = await query(heroesRef, where("Owner","==",ctx.currentEmail))
    const heroesDocs = await getDocs(heroesQuery);
    heroesDocs.forEach(async (item)=>{
      await deleteDoc(doc(db, "Heroes", item.id))
    })


    await deleteDoc(doc(db, "Users", ctx.currentEmail));

    const user = auth.currentUser;
    await deleteUser(user)
      .then(() => {
        alert("account deleted");
      })
      .catch((error) => {
        alert(error.message);
      });

    ctx.Logout();
    navigate("/");
  };

  const EditAccount = async (event) => {
    event.preventDefault();
    
    const docRef = doc(db, "Users", ctx.currentEmail);
    await updateDoc(docRef, {
      name: name,
      username: username,
    });

    ctx.EditAccount(name,username)
  };

  return (
    <Body>
      <div id="AccountPage">
        <h1>Account details</h1>
        <hr />
        <h4>Name: {ctx.currentUser}</h4>
        <h4>Username: {ctx.currentUsername}</h4>
        <h4>Email: {ctx.currentEmail}</h4>
        <h4>Account creation date: {ctx.currentCreationDate}</h4>
        <h1>Account game details</h1>
        <hr />
        <h4>Funds: {ctx.currentFunds}</h4>
        <h4>Number of heroes owned: {ctx.currentHeroesNumber}</h4>
        <h4>High score (EASY) : {ctx.currentHighscoreEasy}</h4>
        <h4>High score (NORMAL) : {ctx.currentHighscoreNormal} (WIP)</h4>
        <h4>High score (HARD) : {ctx.currentHighscoreHard} (WIP)</h4>
        <h1>Posible actions</h1>
        <hr />
        <button
          id="editAccount"
          onClick={() => setDisplayForm({ display: "flex" })}
        >
          Edit account
        </button>
        <button id="deleteAccount" onClick={DeleteAccount}>
          Delete account
        </button>
        <div style={displayForm}>
          <form onSubmit={EditAccount}>
            <label>
              <b>Full name</b>
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="formButtonGroup">
              <input type="submit" value="Edit" />
              <button
                id="hideForm"
                onClick={() => setDisplayForm({ display: "none" })}
              >
                Hide
              </button>
            </div>
          </form>
        </div>
      </div>
    </Body>
  );
};

export default AccountPage;
