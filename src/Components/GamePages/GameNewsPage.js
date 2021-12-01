import "./GameNewsPage.css";
import GameNewsArticle from "../GameComponents/GameNewsArticle.js";
import { useEffect, useState } from "react";
import { db } from "../../Firebase.js";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";

const GameNewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const FetchNews = async () => {
      const newsRef = await collection(db, "News");
      const newsQueried = await query(newsRef, orderBy("Date"));
      const newsDocs = await getDocs(newsQueried);
      let newsList = [];
      newsDocs.forEach((doc) => {
        let date = new Date(doc.data().Date.seconds);
        var dd = String(date.getDate()).padStart(2, "0");
        var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = date.getFullYear();
        let articleDate = dd+"\\"+mm+"\\"+yyyy;
        let article = {
          Title: doc.data().Title,
          Description: doc.data().Description,
          DateAdded: articleDate,
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
