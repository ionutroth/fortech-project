import './GameTeamPage.css';
import { db } from '../../Firebase';
import { collection, doc, getDocs, query,where } from '@firebase/firestore';
import { useEffect, useState, useContext } from 'react';
import Credentials from '../../Context/Credentials';
import GameAvailableItem from '../GameComponents/GameAvailableItem';

const GameTeamPage = () => {
    const ctx = useContext(Credentials);
    const [teamItems, setTeamItems] = useState([]);
    const [availableItems, setAvailableItems] = useState([]);

    useEffect(()=>{
        

        const FetchTeamItems = async ()=>{
            let itemsList=[];
            const itemsRef = await collection(db, "Heroes")
            const itemsQuery = await query(itemsRef, where("Owner", "==", ctx.currentEmail))
            const heroesList = await getDocs(itemsQuery);
            heroesList.forEach((doc)=>{
                let item = {
                    Id: doc.id,
                    Class:doc.data().Class,
                    Rarity: doc.data().Rarity,
                    HP:doc.data().HP,
                    Speed:doc.data().Speed,
                    MagicArmor:doc.data().MagicArmor,
                    PhysArmor:doc.data().PhysArmor,
                    MagicAttack:doc.data().MagicAttack,
                    PhysAttack:doc.data().PhysAttack
                }
                itemsList.push(item);
            });
            setAvailableItems(itemsList);
        }

        FetchTeamItems()
    })

  return (
    <div id="gameTeamPage">
      <div>
        <button id="sortCommonItems">Common</button>
        <button id="sortRareItems">Rare</button>
        <button id="sortEpicItems">Epic</button>
        <button id="sortLegendaryItems">Legendary</button>
        <button id="sortAllItems">All</button>
      </div>
      <div id="TeamRow">
          <div>

          </div>
          <div>
              
          </div>
          <div>
              
          </div>
      </div>
      <div id="HeroesList">
          {availableItems.map((availableItem,index)=>{
              return(
                  <GameAvailableItem 
                  key={index}
                    Class={availableItem.Class}
                    Id={availableItem.Id}
                    Rarity={availableItem.Rarity}
                    HP={availableItem.HP}
                    MagicArmor={availableItem.MagicArmor}
                    PhysArmor={availableItem.PhysArmor}
                    MagicAttack={availableItem.MagicAttack}
                    PhysAttack={availableItem.PhysAttack}
                    Speed={availableItem.Speed}
                    OuterStyle={availableItem.Rarity}
                    InnerStyle={availableItem.Rarity}
                  />
              )
          })}
      </div>
    </div>
  );
};

export default GameTeamPage;
