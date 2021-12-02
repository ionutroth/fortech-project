import "./GameInventoryItem.css";
import OutsideClickHandler from "react-outside-click-handler";
import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import Wizzard from "../../Assets/Wizzard.png";
import { useEffect,useState } from "react";

const GameInventoryItem = (props) => {
    const [display, setDisplay] = useState("none");
    const [image, setImage] = useState();

    const ShowItemModal = () => {
        setDisplay("flex");
      };
    
      const HideItemsModal = () => {
        setDisplay("none");
      };

    useEffect(() => {
        if (props.Image == "Cleric") {
          setImage(Cleric);
        } else if (props.Image == "Warrior") {
          setImage(Warrior);
        } else {
          setImage(Wizzard);
        }
      }, []);

  return (
    <div className="gameInventoryWrapper">
      <div
        className={"gameInventoryItem " + props.OuterStyle}
        onClick={ShowItemModal}
      >
        <div className={props.InnerStyle}>
          <h5>{props.Name}</h5>
          <img src={image}/>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={HideItemsModal}>
        <div className="gameInventoryItemModal" style={{ display: display }}>
          <h2>Stats</h2>
          <p>HP: {props.HP}</p>
          <p>P. Attack: {props.PhysAttack}</p>
          <p>M. Attack: {props.MagicAttack}</p>
          <p>P. Armor: {props.PhysArmor}</p>
          <p>M. Armor: {props.MagicArmor}</p>
          <p>Speed: {props.Speed}</p>
          <div>
            <button className="ModalInventoryButton">Sell</button>
            <button className="ModalInventoryButton" onClick={HideItemsModal}>
              Cancel
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default GameInventoryItem;
