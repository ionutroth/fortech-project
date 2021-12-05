import "./GameTeamPage.css";
import { db } from "../../Firebase";
import { collection, doc, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState, useContext } from "react";
import Credentials from "../../Context/Credentials";
import GameAvailableItem from "../GameComponents/GameAvailableItem";
import GameTeamItem from "../GameComponents/GameTeamItem";

const GameTeamPage = () => {
  const ctx = useContext(Credentials);
  const [teamItems, setTeamItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [currenFilter, setCurrentFilter] = useState("");

  useEffect(() => {
    const FetchAvailableItems = async () => {
      let itemsList = [];
      const itemsRef = await collection(db, "Heroes");
      const itemsQuery = await query(
        itemsRef,
        where("Owner", "==", ctx.currentEmail)
      );
      const heroesList = await getDocs(itemsQuery);
      heroesList.forEach((doc) => {
        let item = {
          Id: doc.id,
          Class: doc.data().Class,
          Rarity: doc.data().Rarity,
          HP: doc.data().HP,
          Speed: doc.data().Speed,
          MagicArmor: doc.data().MagicArmor,
          PhysArmor: doc.data().PhysArmor,
          MagicAttack: doc.data().MagicAttack,
          PhysAttack: doc.data().PhysAttack,
        };
        itemsList.push(item);
      });
      setAvailableItems(itemsList);
      setCurrentItems(itemsList);
    };

    FetchAvailableItems();
  }, []);

  useEffect(() => {
    let aux = availableItems;
    teamItems.forEach((item) => {
      aux = aux.filter((obj) => {
        return obj.Id !== item.Id;
      });
    });
    setAvailableItems(aux);
  },[teamItems]);

  useEffect(()=>{
    let currentTeam = ctx.currentTeam;
    let aux1 = availableItems;
    let aux2 = teamItems;
    currentTeam.forEach((item)=>{
      aux1 = aux1.filter((obj) => obj.Id !== item.Id)
      aux2.push(item)
    })
    setCurrentItems(aux1);
    setCurrentFilter("");
    setTeamItems(aux2)

    console.log(ctx.currentTeam)

  },[])

  return (
    <div id="gameTeamPage">
      <div>
        <button
          id="sortCommonItems"
          onClick={() => {
            setCurrentItems(
              availableItems.filter((item) => item.Rarity == "Common")
            );
            setCurrentFilter("Common");
          }}
        >
          Common
        </button>
        <button
          id="sortRareItems"
          onClick={() => {
            setCurrentItems(
              availableItems.filter((item) => item.Rarity == "Rare")
            );
            setCurrentFilter("Rare");
          }}
        >
          Rare
        </button>
        <button
          id="sortEpicItems"
          onClick={() => {
            setCurrentItems(
              availableItems.filter((item) => item.Rarity == "Epic")
            );
            setCurrentFilter("Epic");
          }}
        >
          Epic
        </button>
        <button
          id="sortLegendaryItems"
          onClick={() => {
            setCurrentItems(
              availableItems.filter((item) => item.Rarity == "Legendary")
            );
            setCurrentFilter("Legendary");
          }}
        >
          Legendary
        </button>
        <button
          id="sortAllItems"
          onClick={() => {
            setCurrentItems(availableItems);
            setCurrentFilter("");
          }}
        >
          All
        </button>

        <button id="SaveTeam" onClick={ctx.SaveTeam(teamItems)}>Save Team</button>
      </div>
      <div id="TeamRow">
        {teamItems.map((teamItem, index) => {
          return (
            <GameTeamItem
              key={index}
              Rarity={teamItem.Rarity}
              Class={teamItem.Class}
              Unequip={() => {
                let aux1 = availableItems;
                aux1.push(teamItem);
                setAvailableItems(aux1);

                let aux2 = teamItems;
                aux2 = aux2.filter((item) => item.Id !== teamItem.Id);
                setTeamItems(aux2);

                let aux3 = currentItems;
                if(currenFilter == ""){
                  aux3.push(teamItem);
                }else if(currenFilter == teamItem.Rarity){
                  aux3.push(teamItem)
                }
                setCurrentItems(aux3);

              }}
            />
          );
        })}
      </div>
      <div id="HeroesList">
        {currentItems.map((availableItem, index) => {
          return (
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
              Choose={() => {
                let aux1 = availableItems;
                aux1 = aux1.filter((item) => item.Id !== availableItem.Id);
                setAvailableItems(aux1);

                let aux2 = currentItems;
                aux2 = aux2.filter((item) => item.Id !== availableItem.Id);
                setCurrentItems(aux2);

                let aux3 = teamItems;
                aux3.push({
                  Id: availableItem.Id,
                  Class: availableItem.Class,
                  Rarity: availableItem.Rarity,
                  HP: availableItem.HP,
                  MagicArmor: availableItem.MagicArmor,
                  PhysArmor: availableItem.PhysArmor,
                  MagicAttack: availableItem.MagicAttack,
                  PhysAttack: availableItem.PhysAttack,
                  Speed: availableItem.Speed,
                });
                setTeamItems(aux3);

                console.log("current items", currentItems);
                console.log("team items", teamItems);
                console.log("available items", availableItems);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameTeamPage;
