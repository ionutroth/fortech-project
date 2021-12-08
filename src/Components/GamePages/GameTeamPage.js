import "./GameTeamPage.css";
import { db } from "../../Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState, useContext } from "react";
import Credentials from "../../Context/Credentials";
import GameAvailableItem from "../GameComponents/GameAvailableItem";
import GameTeamItem from "../GameComponents/GameTeamItem";
import { useNavigate } from "react-router";

const GameTeamPage = () => {
  const ctx = useContext(Credentials);
  const navigate = useNavigate();
  const [teamItems, setTeamItems] = useState([]); // All the team units
  const [availableItems, setAvailableItems] = useState([]); // All available items
  const [currentItems, setCurrentItems] = useState([]); // All the items that are currently shown
  const [currentFilter, setCurrentFilter] = useState(""); // Filters the items with toolbar buttons

  useEffect(() => {
    if (!ctx.userLoggedIn) {
      navigate("/");
      alert("Hey!");
    }
  }, []);

  useEffect(() => {
    // Fetch all items from the database for the specific user.
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

      let aux1 = itemsList;
      let aux2 = [];
      ctx.currentTeam.forEach((item) => {
        aux1 = aux1.filter((obj) => obj.Id !== item.Id);
        aux2.push(item);
      });
      setCurrentItems(aux1);
      setTeamItems(aux2);
    };

    FetchAvailableItems();
  }, []);

  useEffect(() => {
    let aux = availableItems;
    teamItems.forEach((item) => {
      aux = aux.filter((obj) => obj.Id !== item.Id);
    });
    if (currentFilter !== "") {
      aux = aux.filter((obj) => obj.Id !== currentFilter);
    }
    setCurrentItems(aux);
  }, [teamItems]);

  useEffect(() => {}, [currentFilter]);

  return (
    <div id="gameTeamPage">
      <div>
        <button
          id="sortCommonItems"
          onClick={() => {
            let filteredItems = availableItems;
            teamItems.forEach((item) => {
              filteredItems = filteredItems.filter((obj) => obj.Id !== item.Id);
            });
            filteredItems = filteredItems.filter(
              (obj) => obj.Rarity === "Common"
            );
            setCurrentItems(filteredItems);
            console.log(filteredItems);
            setCurrentFilter("Common");
          }}
        >
          Common
        </button>
        <button
          id="sortRareItems"
          onClick={() => {
            let filteredItems = availableItems;
            teamItems.forEach((item) => {
              filteredItems = filteredItems.filter((obj) => obj.Id !== item.Id);
            });
            filteredItems = filteredItems.filter(
              (obj) => obj.Rarity === "Rare"
            );
            setCurrentItems(filteredItems);
            console.log(filteredItems);
            setCurrentFilter("Rare");
          }}
        >
          Rare
        </button>
        <button
          id="sortEpicItems"
          onClick={() => {
            let filteredItems = availableItems;
            teamItems.forEach((item) => {
              filteredItems = filteredItems.filter((obj) => obj.Id !== item.Id);
            });
            filteredItems = filteredItems.filter(
              (obj) => obj.Rarity === "Epic"
            );
            setCurrentItems(filteredItems);
            console.log(filteredItems);
            setCurrentFilter("Epic");
          }}
        >
          Epic
        </button>
        <button
          id="sortLegendaryItems"
          onClick={() => {
            let filteredItems = availableItems;
            teamItems.forEach((item) => {
              filteredItems = filteredItems.filter((obj) => obj.Id !== item.Id);
            });
            filteredItems = filteredItems.filter(
              (obj) => obj.Rarity === "Legendary"
            );
            setCurrentItems(filteredItems);
            console.log(filteredItems);
            setCurrentFilter("Legendary");
          }}
        >
          Legendary
        </button>
        <button
          id="sortAllItems"
          onClick={() => {
            let filteredItems = availableItems;
            teamItems.forEach((item) => {
              filteredItems = filteredItems.filter((obj) => obj.Id !== item.Id);
            });
            setCurrentItems(filteredItems);
            setCurrentFilter("");
          }}
        >
          All
        </button>

        <button
          id="SaveTeam"
          onClick={() => {
            ctx.SaveTeam(teamItems);
          }}
        >
          Save Team
        </button>
      </div>
      <div id="TeamRow">
        {teamItems.map((teamItem, index) => {
          return (
            <GameTeamItem
              key={index}
              Rarity={teamItem.Rarity}
              Class={teamItem.Class}
              Unequip={() => {
                let aux1 = teamItems;
                aux1 = aux1.filter((obj) => obj.Id !== teamItem.Id);
                setTeamItems(aux1);

                let aux2 = currentItems;
                if (currentFilter === "") {
                  aux2.push(teamItem);
                } else if (currentFilter === teamItem.Rarity) {
                  aux2.push(teamItem);
                }
                setCurrentItems(aux2);
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
                if (teamItems.length < 3) {
                  let aux1 = currentItems;
                  aux1 = aux1.filter((item) => item.Id !== availableItem.Id);
                  setCurrentItems(aux1);

                  let aux2 = teamItems;
                  aux2.push(availableItem);
                  setTeamItems(aux2);

                  console.log(teamItems, currentItems);
                } else {
                  alert("Team limit reached! Remove an unit to add another.");
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameTeamPage;
