import Wizzard from "../../Assets/Wizzard.png";
import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import "./EasyLevel.css";
import { useState, useContext } from "react";
import EasyLevelBoss from "../../Assets/easy_level_boss.png";
import Credentials from "../../Context/Credentials.js";
import { useNavigate } from "react-router";

const EasyLevel = () => {
  const ctx = useContext(Credentials);
  const [displayStart, setDisplayStart] = useState("block"); 
  const [displayRedirections, setDisplayRedirections] = useState("none"); 
  const [menuTitle, setMenuTitle] = useState("Try and beat the boss");
  let navigate = useNavigate();

  const BOSS_STATS = {
    Class: "Boss",
    HP: 1000,
    Speed: 350,
    PhysArmor: 25,
    PhysAttack: 70,
    MagicAttack: 40,
    MagicArmor: 30,
  };

  const DUMMY_TEAM = [
    {
      Class: "Wizzard",
      HP: 100,
      Speed: 50,
      PhysArmor: 30,
      MagicArmor: 30,
      MagicAttack: 100,
      PhysAttack: 100,
    },
    {
      Class: "Warrior",
      HP: 100,
      Speed: 20,
      PhysArmor: 30,
      MagicArmor: 30,
      MagicAttack: 100,
      PhysAttack: 100,
    },
    {
      Class: "Cleric",
      HP: 100,
      Speed: 40,
      PhysArmor: 30,
      MagicArmor: 30,
      MagicAttack: 100,
      PhysAttack: 100,
    },
  ];

  // Start Game
  const StartGame = () => {
    //vars
    let matchStatus = "running";
    let StatsOrder = DUMMY_TEAM;
    let currentStatsIndex = 5;
    let roundNumber = 0;
    let clearNode = document.getElementById("battleLog");
    clearNode.innerHTML = "";

    //logic
    // Establishing an order for combat
    StatsOrder.push(BOSS_STATS);
    StatsOrder.sort((a, b) =>
      a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
    ).reverse();

    let node = document.createElement("P");
    node.className = "systemFont";
    let textNode = document.createTextNode("Battle log");
    node.appendChild(textNode);
    document.getElementById("battleLog").appendChild(node);

    // Begin combat
    while (matchStatus === "running") {
      // Verify if the round is over

      if (currentStatsIndex < StatsOrder.length - 1) {
        currentStatsIndex += 1;
      } else if (currentStatsIndex >= StatsOrder.length - 1) {
        currentStatsIndex = 0;
        roundNumber = roundNumber + 1;
        let node = document.createElement("P");
        node.className = "systemFont";
        let textNode = document.createTextNode(
          "A new round begins! Round:" + roundNumber
        );
        node.appendChild(textNode);
        document.getElementById("battleLog").appendChild(node);
      }
      console.log(StatsOrder);
      let currentActingCharacter = StatsOrder[currentStatsIndex];
      let bossStats = StatsOrder.filter((obj) => obj.Class === "Boss")[0];
      let heroesStats = StatsOrder.filter((obj) => obj.Class !== "Boss");

      // Verify if hero or boss atacks.
      if (currentActingCharacter.Class === "Boss") {
        let randomAttack = Math.floor(Math.random() * 2);
        let newHeroesStats = [];
        // Boss Phys attack
        if (randomAttack === 0) {
          heroesStats.forEach((hero) => {
            hero.HP =
              hero.HP - ((100 - hero.PhysArmor) / 100) * bossStats.PhysAttack;
            let node = document.createElement("P");
            node.className = "enemyFont";
            let textNode = document.createTextNode(
              "The boss striked " +
                hero.Class +
                " with a physical attack for " +
                ((100 - hero.PhysArmor) / 100) * bossStats.PhysAttack +
                " dmg"
            );
            node.appendChild(textNode);
            document.getElementById("battleLog").appendChild(node);
            if (hero.HP > 0) {
              newHeroesStats.push(hero);
            }
          });
          // Boss Magical attack
        } else {
          heroesStats.forEach((hero) => {
            hero.HP =
              hero.HP - ((100 - hero.MagicArmor) / 100) * bossStats.MagicAttack;
            let node = document.createElement("P");
            node.className = "enemyFont";
            let textNode = document.createTextNode(
              "The boss striked " +
                hero.Class +
                "with a magic attack for " +
                ((100 - hero.MagicArmor) / 100) * bossStats.MagicAttack +
                " dmg"
            );
            node.appendChild(textNode);
            document.getElementById("battleLog").appendChild(node);
            if (hero.HP > 0) {
              newHeroesStats.push(hero);
            }
          });
        }
        if (newHeroesStats.length === 0) {
          matchStatus = "loss";
          let node = document.createElement("P");
          node.className = "systemFont";
          let textNode = document.createTextNode(
            "All heroes are dead... You lose."
          );
          node.appendChild(textNode);
          document.getElementById("battleLog").appendChild(node);
          setDisplayRedirections("block");
          setDisplayStart("none");
        } else {
          newHeroesStats.push(bossStats);
          StatsOrder = newHeroesStats
            .sort((a, b) =>
              a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
            )
            .reverse();
        }

        // One of the heroes attack
      } else {
        let randomAttack = Math.floor(Math.random() * 2);
        // Hero Phys Attack
        if (randomAttack === 0) {
          bossStats.HP =
            bossStats.HP -
            ((100 - bossStats.PhysArmor) / 100) *
              currentActingCharacter.PhysAttack;
          let node = document.createElement("P");
          node.className = "heroFont";
          let textNode = document.createTextNode(
            currentActingCharacter.Class +
              " striked the boss with a magical attack for " +
              ((100 - bossStats.PhysArmor) / 100) *
                currentActingCharacter.PhysAttack
          );
          node.appendChild(textNode);
          document.getElementById("battleLog").appendChild(node);
          // Hero Magical attack
        } else {
          bossStats.HP =
            bossStats.HP -
            ((100 - bossStats.MagicArmor) / 100) *
              currentActingCharacter.MagicAttack;
          let node = document.createElement("P");
          node.className = "heroFont";
          let textNode = document.createTextNode(
            currentActingCharacter.Class +
              " striked the boss with a magical attack for " +
              ((100 - bossStats.MagicArmor) / 100) *
                currentActingCharacter.MagicAttack
          );
          node.appendChild(textNode);
          document.getElementById("battleLog").appendChild(node);
        }
        // Check if boss is dead
        if (bossStats.HP <= 0) {
          matchStatus = "win";
          let node = document.createElement("P");
          node.className = "systemFont";
          let textNode = document.createTextNode("The boss is dead! You win!");
          node.appendChild(textNode);
          document.getElementById("battleLog").appendChild(node);
          setDisplayRedirections("block");
          setDisplayStart("none");
        } else {
          heroesStats.push(bossStats);
          StatsOrder = heroesStats
            .sort((a, b) =>
              a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
            )
            .reverse();
        }
      }
    }
  };

  const NavTeam =()=>{
    navigate('/game/menu/team')
  }

  const NavPlay =()=>{
    navigate('/game/menu/play')
  }

  return (
    <div id="easyLevel">
      <div id="sceneBody">
        <div className="sceneBodySides">
          {DUMMY_TEAM.map((item, index) => {
            let image;
            if (item.Class === "Wizzard") {
              image = Wizzard;
            } else if (item.Class === "Warrior") {
              image = Warrior;
            } else {
              image = Cleric;
            }
            return (
              <div>
                <img src={image} key={index} className="heroImage" />
              </div>
            );
          })}
        </div>
        <div className="sceneBodySides">
          <div id="bossPannel">
            <img src={EasyLevelBoss} id="bossImage" />
          </div>
        </div>
      </div>
      <div id="actions">
        <div>
          <h3 className="menuActionTitle"> {menuTitle} </h3>
          <div>
            <button className="menuAction" style={{display:displayStart}} onClick={StartGame}>
              Start
            </button>
            <button className="menuAction" style={{display:displayRedirections}} onClick={NavTeam}>
              Team
            </button>
            <button className="menuAction" style={{display:displayRedirections}} onClick={NavPlay}>
              Difficulty
            </button>
          </div>
        </div>
        <div id="battleLog"></div>
      </div>
    </div>
  );
};

export default EasyLevel;
