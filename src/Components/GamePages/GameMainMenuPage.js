import "./GameMainMenuPage.css";
import MenuBackground from "../../Assets/menu_background.jpg";
import { useEffect, useContext } from "react";
import Credentials from "../../Context/Credentials";
import { useNavigate } from "react-router";

const GameMainMenuPage = () => {
  const ctx = useContext(Credentials);
  const navigate = useNavigate()

  useEffect(() => {
    if (!ctx.userLoggedIn) {
      navigate("/");
      alert("Hey!");
    }
  }, []);
  return (
    <div
      id="gameMainMenu"
      style={{ backgroundImage: `url(${MenuBackground})` }}
    >
      <div id="gameName">
        Dungeon
        <br />
        Raid
      </div>
    </div>
  );
};

export default GameMainMenuPage;
