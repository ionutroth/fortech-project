import "./Toolbar.css";
import { useContext } from "react";
import Credentials from "../../Context/Credentials";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  const ctx = useContext(Credentials);

  const UserAccountOptions = () => {
    if (ctx.userLoggedIn) {
      return (
        <div id="toolbar-right">
          <Link to="/" className="toolbar-item">
            Sign-out
          </Link>
          <Link to="/account" className="toolbar-item">
            Account
          </Link>
        </div>
      );
    } else {
      return (
        <div id="toolbar-right">
          <Link to="/authentification" className="toolbar-item">
            Sign-up
          </Link>
          <Link to="/authentification" className="toolbar-item">
            Sign-in
          </Link>
        </div>
      );
    }
  };

  const UserOptions = () => {
    if (ctx.userLoggedIn) {
      return (
        <div id="toolbar-left">
          <Link to="/" className="toolbar-item">
            Home
          </Link>
          <Link to="/about" className="toolbar-item">
            About
          </Link>
          <Link to="/contact" className="toolbar-item">
            Contact
          </Link>
          <Link to="/game" className="toolbar-item">
            Game
          </Link>
        </div>
      );
    } else {
      return (
        <div id="toolbar-left">
          <Link to="/" className="toolbar-item">
            Home
          </Link>
          <Link to="/about" className="toolbar-item">
            About
          </Link>
          <Link to="/contact" className="toolbar-item">
            Contact
          </Link>
          <a className="toolbar-item" onClick={props.ShowModalWarning}>
            Game
          </a>
        </div>
      );
    }
  };

  return (
    <div id="toolbar">
      {UserOptions()}
      <div id="toolbar-center">
        <Link to="/" id="titleLink">
            Fortech project
        </Link>
      </div>
      {UserAccountOptions()}
    </div>
  );
};

export default Toolbar;
