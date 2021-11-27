import { Link } from "react-router-dom";
import "./GameToolbar.css";

const GameToolbar = () => {
  return (
    <div id="toolbarGame">
      <Link to={"menu"} className="toolbarGameItem">
        Main menu
      </Link>
      <Link to={"settings"} className="toolbarGameItem">
        Settings
      </Link>
      <Link to={"account"} className="toolbarGameItem">
        Account
      </Link>
      <Link to={"/"} className="toolbarGameItem">
        Sign out
      </Link>
    </div>
  );
};

export default GameToolbar;
