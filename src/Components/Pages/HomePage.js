import Body from "../Shared/Body.js";
import "./HomePage.css";
import Welcome from "../../Assets/welcome-image.jpg";
import Game from "../../Assets/game-image3.jpg";
import Contact from "../../Assets/contact-ways.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Credentials from "../../Context/Credentials.js";

const HomePage = () => {
  let ctx = useContext(Credentials);

  const redirectionLink = () => {
    if (ctx.userLoggedIn) {
      return (
        <Link className="homePageLink" to="/game/menu">
          Try it out
        </Link>
      );
    } else {
      return (
        <Link className="homePageLink" to="/authentification">
          Sign in
        </Link>
      );
    }
  };

  return (
    <Body>
      <div className="homePageOption">
        <div>
          <h1>Welcome</h1>
          <p>
            This project was made during a training at Fortech. Feel free to
            browse it, play the game and find out more about me or the project.
          </p>
          <Link className="homePageLink" to="/about">
            Find out more
          </Link>
        </div>
        <div>
          <img src={Welcome} />
        </div>
      </div>
      <hr />
      <div className="homePageOption">
        <div>
          <img src={Game} />
        </div>
        <div>
          <h1>The game</h1>
          <p>
            Sign in and play the game. It is a simple turned base strategy game.
            Collect heroes and forget about them.
          </p>
          {redirectionLink()}
        </div>
      </div>
      <hr />
      <div className="homePageOption">
        <div>
          <h1>Contact</h1>
          <p>Find out more about the owner/developer of this project. </p>
          <Link className="homePageLink" to="/contact">
            Read more
          </Link>
        </div>
        <div>
          <img src={Contact} />
        </div>
      </div>
    </Body>
  );
};

export default HomePage;
