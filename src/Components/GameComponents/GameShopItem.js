import "./GameShopItem.css";
import { GiTwoCoins } from "react-icons/gi";
import { useState, useEffect, useContext } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import Wizzard from "../../Assets/Wizzard.png";
import { db } from "../../Firebase.js";
import Credentials from "../../Context/Credentials";
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";

const GameShopItem = (props) => {
  const [display, setDisplay] = useState("none");
  const [image, setImage] = useState();
  const ctx = useContext(Credentials);

  useEffect(() => {
    if (props.Image == "Cleric") {
      setImage(Cleric);
    } else if (props.Image == "Warrior") {
      setImage(Warrior);
    } else {
      setImage(Wizzard);
    }
  }, []);

  const ShowItemModal = () => {
    setDisplay("flex");
  };

  const HideItemsModal = () => {
    setDisplay("none");
  };

  const BuyItem = async () => {
    console.log("ceva", props.Price, ctx.userLoggedIn, ctx.currentFunds);
    
      await addDoc(collection(db, "Heroes"), {
        Owner: ctx.currentEmail,
        Value: props.Price,
        Class: props.Name,
        MagicArmor: props.MagicArmor,
        PhysArmor: props.PhysArmor,
        MagicAttack: props.MagicAttack,
        PhysAttack: props.PhysAttack,
        HP: props.HP,
        Rarity: props.Rarity,
        Speed: props.Speed,
      });
    
  };

  return (
    <div className="gameShopWrapper">
      <div
        className={"gameShopItem " + props.OuterStyle}
        onClick={ShowItemModal}
      >
        <div className={props.InnerStyle}>
          <h5>{props.Name}</h5>
          <img src={image} className="i" />
          <p>
            <b>{props.Price} </b>
            <GiTwoCoins size={10} />
          </p>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={HideItemsModal}>
        <div className="gameShopItemModal" style={{ display: display }}>
          <h2>Stats</h2>
          <p>HP: {props.HP}</p>
          <p>P. Attack: {props.PhysAttack}</p>
          <p>M. Attack: {props.MagicAttack}</p>
          <p>P. Armor: {props.PhysArmor}</p>
          <p>M. Armor: {props.MagicArmor}</p>
          <p>Speed: {props.Speed}</p>
          <div>
            <button className="ModalShopButton" onClick={BuyItem}>
              Buy
            </button>
            <button className="ModalShopButton" onClick={HideItemsModal}>
              Cancel
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default GameShopItem;
