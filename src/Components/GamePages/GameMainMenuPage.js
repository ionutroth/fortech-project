import "./GameMainMenuPage.css";
import MenuBackground from "../../Assets/menu_background.jpg";

const GameMainMenuPage = () => {
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
