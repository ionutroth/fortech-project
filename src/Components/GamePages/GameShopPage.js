import GameShopItem from "../GameComponents/GameShopItem";
import './GameShopPage.css';
import ClericPNG from '../../Assets/Cleric.png'; 
import WarriorPNG from '../../Assets/Warrior.png';
import WizzardPNG from '../../Assets/Wizzard.png';
import {GiTwoCoins} from 'react-icons/gi'


const GameShopPage = () =>{
    
    let classes = [
        {
            image:ClericPNG,
            name:"Cleric"
        },
        {
            image:WarriorPNG,
            name:"Warrior"
        },
        {
            image:WizzardPNG,
            name:"Wizzard"
        }
    ];

    let rarities = [
        {   rarity: "common",
            price:10,
            Outerstyle:{backgroundColor:"green"},
            Innerstyle:{backgroundColor:"#006622"}
        },
        {
            rarity: "rare",
            price:20,
            Outerstyle:{backgroundColor:"blue"},
            Innerstyle:{backgroundColor:"#002699"}
        },
        {
            rarity: "epic",
            price:30,
            Outerstyle:{backgroundColor:"purple"},
            Innerstyle:{backgroundColor:"#660066"}
        },
        {
            rarity: "legendary",
            price:500,
            Outerstyle:{backgroundColor:"orange"},
            Innerstyle:{backgroundColor:"#cc5200"}
        }
    ]


    let shopItems = [];

    classes.forEach(function(item) {
        rarities.forEach(function(rarity){
            shopItems.push(<GameShopItem Name={item.name} Image={item.image} Price={rarity.price} OuterStyle={rarity.Outerstyle} InnerStyle={rarity.Innerstyle} />)
        });
    });
    
    return(
        <div id="gameShopPage">
            <div>
                Funds: <span>1000</span>
                <GiTwoCoins style={{color:"gold"}}/>
                <button id="sortCommonItems">Common</button>
                <button id="sortRareItems">Rare</button>
                <button id="sortEpicItems">Epic</button>
                <button id="sortLegendaryItems">Legendary</button>
            </div>
            <div>
                {shopItems}
            </div>
            
        </div>
    );
}

export default GameShopPage;