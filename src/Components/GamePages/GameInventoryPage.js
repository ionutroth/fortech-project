import "./GameInventoryPage.css";
import GameMenuOptions from "../GameComponents/GameMenuOptions";
import { useState,useEffect } from "react";

const GameItem = () => {
  return (
  <div className="InventoryItem">
      <p>ceva</p>
  </div>
  );
};

const GameInventoryPage = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
          console.log(count);
        }, 3000);
      });

    var itemz =[];

    for(var i=0; i<4; i++){
        itemz.push(<GameItem key={i}/>)
    }

    

  return (
    <div id="gameInventory">
      <div className="gameInventoryCol" id="gameInventoryItemDiv">
          {itemz}
      </div>
    </div>
  );
};

export default GameInventoryPage;
