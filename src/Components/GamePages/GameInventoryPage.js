import "./GameInventoryPage.css";
import { useState, useEffect, useContext } from "react";
import Credentials from "../../Context/Credentials";
import { db } from "../../Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import GameInventoryItem from "../GameComponents/GameInventoryItem";

const GameInventoryPage = () => {
  const ctx = useContext(Credentials);
  const [inventoryItemsList, setInventoryItemsList] = useState([]);

  useEffect(() => {
    const FetchInventory = async () => {
      let itemsList = [];
      const HeroesRef = await collection(db, "Heroes");
      const HeroesQuery = await query(
        HeroesRef,
        where("Owner", "==", ctx.currentEmail)
      );
      const HeroesList = await getDocs(HeroesQuery);
      HeroesList.forEach((doc) => {
        let item = {
          Class: doc.data().Class,
          Rarity: doc.data().Rarity,
          HP: doc.data().HP,
          Speed: doc.data().Speed,
          MagicArmor: doc.data().MagicArmor,
          PhysArmor: doc.data().PhysArmor,
          Value: doc.data().Value,
          MagicAttack: doc.data().MagicAttack,
          PhysAttack: doc.data().PhysAttack,
        };
        itemsList.push(item);
      });
      setInventoryItemsList(itemsList);
    };

    FetchInventory();
  }, []);

  return (
    <div id="gameInventory">
      <div className="gameInventoryCol" id="gameInventoryItemDiv">
        {inventoryItemsList.map((inventoryItem, index) => {
          return (
            <GameInventoryItem
              Name={inventoryItem.Class}
              Image={inventoryItem.Class}
              Price={inventoryItem.Price}
              OuterStyle={inventoryItem.Rarity + "__Outer"}
              InnerStyle={inventoryItem.Rarity + "__Inner"}
              HP={inventoryItem.HP}
              MagicArmor={inventoryItem.MArmor}
              PhysArmor={inventoryItem.PArmor}
              PhysAttack={inventoryItem.PAttack}
              MagicAttack={inventoryItem.MAttack}
              key={index}
              Speed={inventoryItem.Speed}
              Rarity={inventoryItem.Rarity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameInventoryPage;
