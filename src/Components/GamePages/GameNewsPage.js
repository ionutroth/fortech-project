import "./GameNewsPage.css";
import GameNewsArticle from "../GameComponents/GameNewsArticle.js";
import { useEffect, useState, useContext } from "react";
import { db } from "../../Firebase.js";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import Credentials from "../../Context/Credentials";
import { useNavigate } from "react-router";

const GameNewsPage = () => {
  const [news, setNews] = useState([]);
  const ctx  = useContext(Credentials)
  const navigate = useNavigate()

  useEffect(()=>{
    if( !ctx.userLoggedIn){
      navigate("/");
      alert("Hey!")
    }
  },[])

  useEffect(() => {
    const FetchNews = async () => {
      const newsRef = await collection(db, "News");
      const newsQueried = await query(newsRef, orderBy("Date"));
      const newsDocs = await getDocs(newsQueried);
      let newsList = [];
      newsDocs.forEach((doc) => {
        let article = {
          Title: doc.data().Title,
          Description: doc.data().Description,
        };
        newsList.push(article);

      });
      setNews(newsList);
    };

    FetchNews();
    console.log(news);
  }, []);

  return (
    <div id="gameNewsPage">
      {news.map((article, index) => {
        return (
          <GameNewsArticle
            Title={article.Title}
            DateAdded={article.DateAdded}
            Description={article.Description}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default GameNewsPage;
