import "./Toolbar.css";
import { useContext, useState } from "react";
import Credentials from "../../Context/Credentials";
import { Link } from "react-router-dom";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Toolbar = (props) => {
  const ctx = useContext(Credentials);
  const [dropdownDisplay, setDropdownDisplay] = useState("none");

  const UserAccountOptions = () => {
    if (ctx.userLoggedIn) {
      if (ctx.currentUser === "admin") {
        return (
          <div id="toolbar-right">
            <Link to="/" className="toolbar-item" onClick={ctx.Logout}>
              Sign-out
            </Link>
            <Link to="/account" className="toolbar-item">
              Account
            </Link>
            <Link to="/admin" className="toolbar-item">
              Administrate
            </Link>
          </div>
        );
      } else {
        return (
          <div id="toolbar-right">
            <Link to="/" className="toolbar-item" onClick={ctx.Logout}>
              Sign-out
            </Link>
            <Link to="/account" className="toolbar-item">
              Account
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div id="toolbar-right">
          <Link to={`/authentification/`} className="toolbar-item">
            Sign-up/Sign-in
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

  const UserOptionsDropdown = () => {
    if (ctx.userLoggedIn) {
      return (
        <Link to="/game" className="toolbar-item">
          Game
        </Link>
      );
    } else {
      return (
        <a className="toolbar-item" onClick={props.ShowModalWarning}>
          Game
        </a>
      );
    }
  };

  const UserAccountOptionsDropdown = () => {
    if (ctx.userLoggedIn) {
      if (ctx.currentUser === "admin") {
        return (
          <>
            <Link to="/" className="toolbar-item" onClick={ctx.Logout}>
              Sign-out
            </Link>
            <hr/>
            <Link to="/account" className="toolbar-item">
              Account
            </Link>
            <hr/>
            <Link to="/admin" className="toolbar-item">
              Administrate
            </Link>
          </>
        );
      } else {
        return (
          <>
            <Link to="/" className="toolbar-item" onClick={ctx.Logout}>
              Sign-out
            </Link>
            <hr/>
            <Link to="/account" className="toolbar-item">
              Account
            </Link>
          </>
        );
      }
    } else {
      return (
        <Link to={`/authentification/`} className="toolbar-item">
          Sign-up/Sign-in
        </Link>
      );
    }
  };

  const ChangeDropdownDisplay = () => {
    if (dropdownDisplay === "none") {
      setDropdownDisplay("flex");
    } else if (dropdownDisplay === "flex") {
      setDropdownDisplay("none");
    }
  };

  return (
    <div id="toolbar">
      {/* Toolbar version */}
      <div id="buttonsToolbar">
        {UserOptions()}
        <div id="toolbar-center">
          <Link to="/" id="titleLink">
            Fortech project
          </Link>
        </div>
        {UserAccountOptions()}
      </div>
      {/* Dropdown version */}
      <div id="dropdownToolbar">
        <div>
          <BsFillArrowDownCircleFill
            size={30}
            onClick={ChangeDropdownDisplay}
          />
        </div>
        <div id="dropdownToolbarItems" style={{ display: dropdownDisplay }}>
          <Link to="/" className="toolbar-item">
            Home
          </Link>
          <hr/>
          <Link to="/about" className="toolbar-item">
            About
          </Link>
          <hr/>
          <Link to="/contact" className="toolbar-item">
            Contact
          </Link>
          <hr/>
          {UserOptionsDropdown()}
          <hr/>
          {UserAccountOptionsDropdown()}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
