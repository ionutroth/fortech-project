import "./GameNewsArticle.css";
import { useState } from "react";

const GameNewsArticle = (props) => {

const [displayAttr, setDisplayAttr] = useState("none")
const [buttonText, setButtonText] = useState("Read more")

const ChangeDisplay = () =>{
    if (displayAttr === "none"){
        setDisplayAttr("flex")
        setButtonText("Hide")
    }else{
        setDisplayAttr("none")
        setButtonText("Read more")
    }
}


  return (
    <div className="article">
      <div className="articleTitle">
        <div>
          <h2>{props.Title}</h2>
        </div>
        <div>
          <h2>{props.DateAdded}</h2>
        </div>
      </div>
    <div className="articleDescription" style={{display:displayAttr}}>
        <p>{props.Description}</p>
    </div>
      
      <button className="articleLink" onClick={ChangeDisplay}>{buttonText}</button>
    </div>
  );
};

export default GameNewsArticle;
