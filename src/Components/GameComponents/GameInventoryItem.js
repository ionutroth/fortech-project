import "./GameInventoryItem.css";
import OutsideClickHandler from "react-outside-click-handler";
import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import Wizzard from "../../Assets/Wizzard.png";
import { useEffect, useState, useContext } from "react";
import { deleteDoc, doc,updateDoc } from "@firebase/firestore";
import { db } from "../../Firebase";
import Credentials from "../../Context/Credentials";

const GameInventoryItem = (props) => {
  const [display, setDisplay] = useState("none");
  const [image, setImage] = useState();
  const ctx = useContext(Credentials);

  const ShowItemModal = () => {
    setDisplay("flex");
  };

  const HideItemsModal = () => {
    setDisplay("none");
  };

  useEffect(() => {
    if (props.Image === "Cleric") {
      setImage(Cleric);
    } else if (props.Image === "Warrior") {
      setImage(Warrior);
    } else {
      setImage(Wizzard);
    }
  });

  const SellItem = async () => {
    await deleteDoc(doc(db, "Heroes", props.ItemId));
    props.RemoveItem(props.ItemId);
    ctx.UpdateFunds(parseInt(props.Price / 2) * -1);
    const userRef = doc(db, "Users", ctx.currentEmail);
    await updateDoc(userRef, {
      heroesNumber: ctx.currentHeroesNumber - 1,
    });
    ctx.UpdateHeroesNumber(-1);
  };

  return (
    <div id="gameInventoryWrapper">
      <div
        className={"gameInventoryItem " + props.OuterStyle}
        onClick={ShowItemModal}
      >
        <div className={props.InnerStyle}>
          <h3>{props.Name}</h3>
          <img src={image} />
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
            <button className="ModalInventoryButton" onClick={SellItem}>
              Sell
            </button>
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
