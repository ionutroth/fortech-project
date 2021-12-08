import "./GameLeaderBoard.css";
import { db } from "../../Firebase";
import {
  collection,
  orderBy,
  limit,
  query,
  where,
  getDocs,
} from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Credentials from "../../Context/Credentials";
import { useNavigate } from "react-router";

const GameLeaderBoard = () => {
  let ctx = useContext(Credentials);
  const navigate = useNavigate()
  const [scoresEasyList, setScoresEasyList] = useState([]);
  const [scoresNormalList, setScoresNormalList] = useState([]);
  const [scoresHardList, setScoresHardList] = useState([]);

  useEffect(()=>{
    if( !ctx.userLoggedIn){
      navigate("/");
      alert("Hey!")
    }
  },[])

  useEffect(async () => {
    const scoresRef = await collection(db, "Leaderboards");
    const queryEasy = await query(
      scoresRef,
      where("Difficulty", "==", "Easy"),
      orderBy("Score", "desc"),
      limit(10)
    );
    const queryNormal = await query(
      scoresRef,
      where("Difficulty", "==", "Normal"),
      orderBy("Score", "desc"),
      limit(10)
    );
    const queryHard = await query(
      scoresRef,
      where("Difficulty", "==", "Hard"),
      orderBy("Score", "desc"),
      limit(10)
    );

    const scoresEasyDocs = await getDocs(queryEasy);
    const scoresNormalDocs = await getDocs(queryNormal);
    const scoresHardDocs = await getDocs(queryHard);

    let scoresEasy = [];
    let scoresNormal = [];
    let scoresHard = [];

    scoresEasyDocs.forEach((doc) => {
      let score = {
        score: doc.data().Score,
        user: doc.data().User,
      };
      scoresEasy.push(score);
    });

    scoresNormalDocs.forEach((doc) => {
      let score = {
        score: doc.data().Score,
        user: doc.data().User,
      };
      scoresNormal.push(score);
    });

    scoresHardDocs.forEach((doc) => {
      let score = {
        score: doc.data().Score,
        user: doc.data().User,
      };
      scoresHard.push(score);
    });

    scoresEasy
      .sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0))
      .reverse();
    scoresNormal
      .sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0))
      .reverse();
    scoresHard
      .sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0))
      .reverse();

    setScoresEasyList(scoresEasy);
    setScoresNormalList(scoresNormal);
    setScoresHardList(scoresHard);
    console.log(scoresEasyList);
  }, []);

  return (
    <div id="gameLeaderboardWrapper">
      <div>
        <h3> EASY</h3>
        <div id="scoresEasy">
          {scoresEasyList.map((score, index) => {
            return (
              <p key={index}>
                {index + 1}. {score.score} {score.user}
              </p>
            );
          })}
        </div>
        <div className="personalBest">
          <h5>Personal best:</h5>
          <p>{ctx.currentHighscoreEasy}</p>
        </div>
      </div>
      <div>
        <h2> NORMAL</h2>
        <div id="scoresNormal">
          {scoresNormalList.map((score, index) => {
            return (
              <p key={index}>
                {index + 1}. {score.score} {score.user}
              </p>
            );
          })}
        </div>
        <div className="personalBest">
          <h5>Personal best:</h5>
          <p>{ctx.currentHighscoreNormal}</p>
        </div>
      </div>
      <div>
        <h1> HARD</h1>
        <div id="scoresNormal">
          {scoresHardList.map((score, index) => {
            return (
              <p key={index}>
                {index + 1}. {score.score} {score.user}
              </p>
            );
          })}
        </div>
        <div className="personalBest">
          <h5>Personal best:</h5>
          <p>{ctx.currentHighscoreHard}</p>
        </div>
      </div>
    </div>
  );
};

export default GameLeaderBoard;
