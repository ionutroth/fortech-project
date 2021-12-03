import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import Wizzard from "../../Assets/Wizzard.png";
import './GameAvailableItem.css'
import { useState,useEffect } from "react";

const GameAvailableItem = (props) => {
    const [image, setImage] = useState();

    useEffect(() => {
        if (props.Image == "Cleric") {
          setImage(Cleric);
        } else if (props.Image == "Warrior") {
          setImage(Warrior);
        } else {
          setImage(Wizzard);
        }
      },[]);

  return (
  <div className="avaialableItem">
      <div className={props.OuterStyle}></div>

  </div>);
};

export default GameAvailableItem;
