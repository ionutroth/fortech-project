import "./GameInventoryPage.css";
import { useState, useEffect, useContext } from "react";
import Credentials from "../../Context/Credentials";
import { db } from "../../Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import GameInventoryItem from "../GameComponents/GameInventoryItem";
import { GiTwoCoins } from "react-icons/gi";

const GameInventoryPage = () => {
  const ctx = useContext(Credentials);
  const [inventoryItemsList, setInventoryItemsList] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

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
          Id: doc.id,
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
      setCurrentItems(itemsList)
    };
    FetchInventory();
  }, []);

  return (
    <div id="gameInventoryPage">
      <div>
        Funds: <span>{ctx.currentFunds}</span>
        <GiTwoCoins style={{ color: "gold" }} />
        <button id="sortCommonItems" onClick={()=>{setCurrentItems(inventoryItemsList.filter(item=> item.Rarity === "Common"))}}>Common</button>
        <button id="sortRareItems" onClick={()=>{setCurrentItems(inventoryItemsList.filter(item=> item.Rarity === "Rare"))}}>Rare</button>
        <button id="sortEpicItems" onClick={()=>{setCurrentItems(inventoryItemsList.filter(item=> item.Rarity === "Epic"))}}>Epic</button>
        <button id="sortLegendaryItems" onClick={()=>{setCurrentItems(inventoryItemsList.filter(item=> item.Rarity === "Legendary"))}}>Legendary</button>
        <button id="sortAllItems" onClick={()=>{setCurrentItems(inventoryItemsList)}}>All</button>
      </div>
      <div>
      {currentItems.map((inventoryItem, index) => {
          return (
            <GameInventoryItem
              Name={inventoryItem.Class}
              Image={inventoryItem.Class}
              Price={inventoryItem.Value}
              OuterStyle={inventoryItem.Rarity + "__Outer"}
              InnerStyle={inventoryItem.Rarity + "__Inner"}
              HP={inventoryItem.HP}
              MagicArmor={inventoryItem.MagicArmor}
              PhysArmor={inventoryItem.PhysArmor}
              PhysAttack={inventoryItem.PhysAttack}
              MagicAttack={inventoryItem.MagicAttack}
              key={index}
              Speed={inventoryItem.Speed}
              Rarity={inventoryItem.Rarity}
              ItemId={inventoryItem.Id}
              RemoveItem={(id)=>{
                let filteredList = inventoryItemsList.filter((obj) => {return obj.Id !== id})
                setInventoryItemsList(filteredList)
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameInventoryPage;
