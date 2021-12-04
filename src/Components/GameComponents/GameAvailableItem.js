import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import Wizzard from "../../Assets/Wizzard.png";
import "./GameAvailableItem.css";
import { useState, useEffect } from "react";

const GameAvailableItem = (props) => {
  const [image, setImage] = useState();

  useEffect(() => {
    if (props.Class == "Cleric") {
      setImage(Cleric);
    } else if (props.Class == "Warrior") {
      setImage(Warrior);
    } else {
      setImage(Wizzard);
    }
  });

  return (
    <div className="availableItemWrapper">
      <div className={props.OuterStyle+"__Outer"}>
        <div className={props.InnerStyle+"__Inner"}>
          <h3>{props.Class}</h3>
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default GameAvailableItem;
