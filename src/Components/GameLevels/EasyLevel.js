import Wizzard from "../../Assets/Wizzard.png";
import Cleric from "../../Assets/Cleric.png";
import Warrior from "../../Assets/Warrior.png";
import "./EasyLevel.css";
import { useState, useEffect, useContext } from "react";
import EasyLevelBoss from "../../Assets/easy_level_boss.png";
import Credentials from '../../Context/Credentials.js'

const EasyLevel = () => {
  const ctx = useContext(Credentials);
  const [round, setRound] = useState(1); // Counts the number of rounds
  const [order, setOrder] = useState([]); // List ordered by the speed property
  const [currentStats, setCurrentStats] = useState({});


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

  // Initial useEffect
  useEffect(()=>{
      //vars
    let matchStatus = "running";
    let StatsOrder = DUMMY_TEAM;
    let currentStatsIndex = 5;

    //logic
    // Establishing an order for combat
    StatsOrder.push(BOSS_STATS)
    StatsOrder.sort((a, b) =>
      a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
    ).reverse();
    // Begin combat
    while(matchStatus=="running"){
      // Verify if the round is over
      if(currentStatsIndex<3){
        currentStatsIndex+=1
      }else if (currentStatsIndex>=3){
        currentStatsIndex = 0
      }

      let currentActingCharacter = StatsOrder[currentStatsIndex];
      let bossStats = StatsOrder.filter((obj)=>obj.Class==="Boss");
      let heroesStats = StatsOrder.filter((obj)=>obj.Class!=="Boss");
      console.log(bossStats)
      // Verify if hero or boss atacks.
      if (currentActingCharacter.Class==="Boss"){
        
        let randomAttack = Math.floor(Math.random() * 2);
        let newHeroesStats = []
        // Boss Phys attack 
        if(randomAttack===0){
           heroesStats.forEach((item)=>{
             let hero = item;
             hero.HP = hero.HP - (100-hero.PhysArmor)/100 *bossStats
           })
           // Boss Magical attack
        }else{

        }
      }else{
        
      }
      matchStatus = "ceva"
    }
  },[])


  // Initial useEffect.
  // useEffect(() => {
  //   let StatsOrder = DUMMY_TEAM;/
  //   StatsOrder.push(BOSS_STATS);
  //   StatsOrder = StatsOrder.sort((a, b) =>
  //     a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
  //   );
  //   setOrder(StatsOrder.reverse());
  //   setCurrentStats(StatsOrder[currentStatsIndex]);
  //   console.log(order)
  //   //Check if the boss acts first. If it does then perform a random attack.
  //   // if (StatsOrder[currentStatsIndex].Class === "Boss") {
  //   //   let randomAttack = Math.floor(Math.random() * 2);
  //   //   let oldHeroStats = order.filter((item) => item.Class !== "Boss");
  //   //   console.log(oldHeroStats);
  //   //   if (randomAttack == 0) {
  //   //     oldHeroStats.forEach((hero, index) => {
  //   //       if (
  //   //         hero.HP <=
  //   //         (BOSS_STATS.PhysAttack * (100 - hero.PhysArmor)) / 100
  //   //       ) {
  //   //         oldHeroStats.splice(index, 1);
  //   //       } else {
  //   //         hero.HP =
  //   //           hero.HP - (BOSS_STATS.PhysAttack * (100 - hero.PhysArmor)) / 100;
  //   //       }
  //   //     });
  //   //   } else {
  //   //     oldHeroStats.forEach((hero, index) => {
  //   //       if (
  //   //         hero.HP <=
  //   //         (BOSS_STATS.MagicAttack * (100 - hero.MagicArmor)) / 100
  //   //       ) {
  //   //         oldHeroStats.splice(index, 1);
  //   //       } else {
  //   //         hero.HP =
  //   //           hero.HP -
  //   //           (BOSS_STATS.MagicAttack * (100 - hero.MagicArmor)) / 100;
  //   //       }
  //   //     });
  //   //   }
  //   //   oldHeroStats.push(order.filter((item) => item.Class === "Boss")[0]);
  //   //   let newStats = oldHeroStats.sort((a, b) =>
  //   //     a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
  //   //   );
  //   //   setOrder(newStats.reverse());
  //   //   setCurrentStatsIndex(currentStatsIndex + 1);
  //   // }
    
  // }, []);

  // useEffect(() => {
  //   // Verify if either the boss or the team is dead.
  //   let teamItemsNumber = order.filter((obj) => obj.Class !== "Boss");
  //   if (teamItemsNumber.length === 0) {
  //     setMatchStatus("Loss");
  //   }
  //   let boss = order.filter((obj) => obj.Class === "Boss");
  //   if (boss.HP === 0) {
  //     setMatchStatus("Winn");
  //   }

  //   setCurrentStats(order[currentStatsIndex]);

  //   // Verify if the boss attacks.
  //   if (currentStats.Class === "Boss") {
  //     let randomAttack = Math.floor(Math.random() * 2);
  //     let oldHeroStats = order.filter((item) => item.Class !== "Boss");
  //     if (randomAttack == 0) {
  //       oldHeroStats.forEach((hero, index) => {
  //         if (
  //           hero.HP <=
  //           (BOSS_STATS.PhysAttack * (100 - hero.PhysArmor)) / 100
  //         ) {
  //           oldHeroStats.splice(index, 1);
  //         } else {
  //           hero.HP =
  //             hero.HP - (BOSS_STATS.PhysAttack * (100 - hero.PhysArmor)) / 100;
  //         }
  //       });
  //     } else {
  //       oldHeroStats.forEach((hero, index) => {
  //         if (
  //           hero.HP <=
  //           (BOSS_STATS.MagicAttack * (100 - hero.MagicArmor)) / 100
  //         ) {
  //           oldHeroStats.splice(index, 1);
  //         } else {
  //           hero.HP =
  //             hero.HP -
  //             (BOSS_STATS.MagicAttack * (100 - hero.MagicArmor)) / 100;
  //         }
  //       });
  //     } // If not, update the stats.

  //     let newStats = oldHeroStats.push(
  //       order.filter((obj) => obj.Class === "Boss")
  //     );
  //     newStats = newStats.sort((a, b) =>
  //       a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
  //     );

  //     setOrder(newStats.reverse());

  //     if (currentStatsIndex < order.length - 1) {
  //       setCurrentStatsIndex(currentStatsIndex + 1);
  //     } else {
  //       setCurrentStatsIndex(0);
  //     }
  //     setCurrentStats(order[currentStatsIndex]);
  //   } else {
  //     setCurrentStats(order[currentStatsIndex]);
  //   }
  // }, [currentStatsIndex]);

  // // useEffect(() => {
  // //   if (matchStatus === "Loss") {
  // //     console.log("show modal game over");
  // //   } else if (matchStatus === "Winn") {
  // //     console.log("u won");
  // //   }
  // // }, [matchStatus]);

  // const PerformPhysAttack = () => {
  //   console.log("dau cu bata");
  //   let bossStats = order.filter((obj) => obj.Class == "Boss");
  //   if (
  //     bossStats.HP -
  //       (currentStats.PhysAttack * (100 - bossStats.PhysArmor)) / 100 <
  //     0
  //   ) {
  //     setMatchStatus("Winn");
  //   } else {
  //     bossStats.HP =
  //       bossStats.HP -
  //       (currentStats.PhysAttack * (100 - bossStats.PhysArmor)) / 100;
  //   }
  //   let newStats = [];
  //   newStats.push(bossStats);
  //   order.forEach((item) => {
  //     if (item.Class !== "Boss") {
  //       newStats.push(item);
  //     }
  //   });

  //   newStats = newStats.sort((a, b) =>
  //     a.Speed > b.Speed ? 1 : b.Speed > a.Speed ? -1 : 0
  //   );
  //   setOrder(newStats.reverse())

  //   setCurrentStatsIndex(currentStatsIndex + 1);
  //   console.log(order)
  // };

  // const PerformMagicalAttack = () => {
  //   console.log("dau cu vraja");

  //   setCurrentStatsIndex(currentStatsIndex + 1);
  // };

  return (
    <div id="easyLevel">
      <div id="sceneOrder">
        {order.map((item, index) => {
          let image;
          if (item.Class == "Wizzard") {
            image = Wizzard;
          } else if (item.Class == "Warrior") {
            image = Warrior;
          } else if (item.Class == "Cleric") {
            image = Cleric;
          } else {
            image = EasyLevelBoss;
          }
          return (
            <div>
              <img src={image} key={index} />
            </div>
          );
        })}
      </div>
      <div id="sceneBody">
        <div className="sceneBodySides">
          {DUMMY_TEAM.map((item, index) => {
            let image;
            if (item.Class == "Wizzard") {
              image = Wizzard;
            } else if (item.Class == "Warrior") {
              image = Warrior;
            } else {
              image = Cleric;
            }
            return (
              <div>
                <img src={image} key={index} className="heroImage" />
                <div className="heroHpBar">
                  <div className="heroHpRemaining"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sceneBodySides">
          <div id="bossPannel">
            <img src={EasyLevelBoss} id="bossImage" />
            <div id="bossHpBar">
              <div id="bossHpRemaining"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="actions">
        <div>
          <button className="heroAction">
            START
          </button>
        </div>
        <div>
          <p>Match started</p>
        </div>
      </div>
    </div>
  );
};

export default EasyLevel;
