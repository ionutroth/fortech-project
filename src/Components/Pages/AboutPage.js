import AboutDescription from "../AboutComponents/AboutDescription";
import { useState,  } from "react";
import game_image from "../../Assets/game_image.png";
import react_image from "../../Assets/react_image.png";
import user_image from "../../Assets/user_image.png";
import project_image from "../../Assets/project_image.png";
import firebase_image from "../../Assets/firebase_image.png"
import "./AboutPage.css";
import Body from "../Shared/Body.js";

const About = () => {
  const [option, setOption] = useState("none");
  const [hoverImage, setHoverImage] = useState(project_image);

  return (
    <Body>
      <div id="table">
        <div>
          <img src={hoverImage} id="centerImage" alt="HoveredImage" />
        </div>
        <div className="tableRow">
          <div
            id="tableUpperLeft"
            className="tableCell"
            onClick={() => setOption("frontend")}
            onMouseEnter={() => {setHoverImage(react_image)}}
            onMouseLeave={() => setHoverImage(project_image)}
          >
            <p className="tableCellTitle">Frontend</p>
          </div>
          <div
            id="tableUpperRight"
            className="tableCell"
            onClick={() => setOption("theme")}
            onMouseEnter={() => setHoverImage(game_image)}
            onMouseLeave={() => setHoverImage(project_image)}
          >
            <p className="tableCellTitle">Theme</p>
          </div>
        </div>
        <div className="tableRow">
          <div
            id="tableDownLeft"
            className="tableCell"
            onClick={() => setOption("backend")}
            onMouseEnter={() => setHoverImage(firebase_image)}
            onMouseLeave={() => setHoverImage(project_image)}
          >
            <p className="tableCellTitle">Backend</p>
          </div>
          <div
            id="tableDownRight"
            className="tableCell"
            onClick={() => setOption("owner")}
            onMouseEnter={() => setHoverImage(user_image)}
            onMouseLeave={() => setHoverImage(project_image)}
          >
            <p className="tableCellTitle">Owner</p>
          </div>
        </div>
      </div>
      <AboutDescription selectedOption={option} />
    </Body>
  );
};

export default About;
