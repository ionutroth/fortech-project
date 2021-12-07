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
import { useEffect, useState } from "react";

const GameLeaderBoard = () => {
  const [scoresEasyList, setScoresEasyList] = useState([]);
  const [scoresNormalList, setScoresNormalList] = useState([]);
  const [scoresHardList, setScoresHardList] = useState([]);

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

    scoresEasy.sort((a, b) =>
      a.score > b.score ? 1 : b.score > a.score ? -1 : 0
    ).reverse();
    scoresNormal.sort((a, b) =>
      a.score > b.score ? 1 : b.score > a.score ? -1 : 0
    ).reverse();
    scoresHard.sort((a, b) =>
      a.score > b.score ? 1 : b.score > a.score ? -1 : 0
    ).reverse();

    setScoresEasyList(scoresEasy)
    setScoresNormalList(scoresNormal)
    setScoresHardList(scoresHard)
    console.log(scoresEasyList)
  }, []);

  return (
    <div id="gameLeaderboardWrapper">
      <div>
        <h3> EASY</h3>
        {scoresEasyList.map((score,index)=>{
          return(
            <p key={index}>{index+1}. {score.score} {score.user}</p>
          )
        })}
      </div>
      <div>
        <h2> NORMAL</h2>
        {scoresNormalList.map((score,index)=>{
          return(
            <p key={index}>{index+1}. {score.score} {score.user}</p>
          )
        })}
      </div>
      <div>
        <h1> HARD</h1>
        {scoresHardList.map((score,index)=>{
          return(
            <p key={index}>{index+1}. {score.score} {score.user}</p>
          )
        })}
      </div>
    </div>
  );
};

export default GameLeaderBoard;
