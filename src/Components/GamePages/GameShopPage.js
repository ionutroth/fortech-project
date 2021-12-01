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
  let itemsComponents = [];

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
        };
        itemsList.push(shopItem);
        
      });
      setShopItems(itemsList);
    };

    FetchShopItems();

    itemsList.forEach((shopItem, index)=>{
        itemsComponents.push(
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
            />
        )
    })
    
    console.log(itemsList)
  }, []);

  return (
    <div id="gameShopPage">
      <div>
        Funds: <span>{ctx.currentFunds}</span>
        <GiTwoCoins style={{ color: "gold" }} />
        <button id="sortCommonItems">Common</button>
        <button id="sortRareItems">Rare</button>
        <button id="sortEpicItems">Epic</button>
        <button id="sortLegendaryItems">Legendary</button>
      </div>
      <div>
        {shopItems.map((shopItem, index) => {
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
            />
          )
        })}
        {/* {itemsComponents} */}
      </div>
    </div>
  );
};

export default GameShopPage;
