import GameShopItem from "../GameComponents/GameShopItem";
import "./GameShopPage.css";
import { GiTwoCoins } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import Credentials from "../../Context/Credentials";
import { db } from "./../../Firebase.js";
import { collection, getDocs, query,orderBy } from "@firebase/firestore";

const GameShopPage = () => {
  const ctx = useContext(Credentials);
  const [shopItems, setShopItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    let itemsList = [];

    const FetchShopItems = async () => {
      const itemsRef = await collection(db, "Shop");
      const itemsQuery = await query(
        itemsRef,
        orderBy("Class"),
        orderBy("Price")
      );
      const itemsDocs = await getDocs(itemsQuery);
      itemsDocs.forEach((doc) => {
        let shopItem = {
          Class: doc.data().Class,
          Rarity: doc.data().Rarity,
          Price: doc.data().Price,
          PArmor: doc.data().PhysArmor,
          MArmor: doc.data().MagicArmor,
          PAttack: doc.data().PhysAttack,
          MAttack: doc.data().MagicAttack,
          HP: doc.data().HP,
          Speed: doc.data().Speed
        };
        itemsList.push(shopItem);
        
      });
      setShopItems(itemsList);
      setCurrentItems(itemsList)
    };

    FetchShopItems();

    console.log(itemsList)
  }, []);

  return (
    <div id="gameShopPage">
      <div>
        Funds: <span>{ctx.currentFunds}</span>
        <GiTwoCoins style={{ color: "gold" }} />
        <button id="sortCommonItems" onClick={()=>setCurrentItems(shopItems.filter(item=>item.Rarity=="Common"))}>Common</button>
        <button id="sortRareItems" onClick={()=>setCurrentItems(shopItems.filter(item=>item.Rarity=="Rare"))}>Rare</button>
        <button id="sortEpicItems" onClick={()=>setCurrentItems(shopItems.filter(item=>item.Rarity=="Epic"))}>Epic</button>
        <button id="sortLegendaryItems" onClick={()=>setCurrentItems(shopItems.filter(item=>item.Rarity=="Legendary"))}>Legendary</button>
        <button id="sortAllItems" onClick={()=>setCurrentItems(shopItems)}>All</button>
      </div>
      <div>
        {currentItems.map((shopItem, index) => {
          return (
            <GameShopItem
              Name={shopItem.Class}
              Image={shopItem.Class}
              Price={shopItem.Price}
              OuterStyle={shopItem.Rarity + "__Outer"}
              InnerStyle={shopItem.Rarity + "__Inner"}
              HP={shopItem.HP}
              MagicArmor={shopItem.MArmor}
              PhysArmor={shopItem.PArmor}
              PhysAttack={shopItem.PAttack}
              MagicAttack={shopItem.MAttack}
              key={index}
              Speed={shopItem.Speed}
              Rarity={shopItem.Rarity}
            />
          )
        })}
      </div>
    </div>
  );
};

export default GameShopPage;
