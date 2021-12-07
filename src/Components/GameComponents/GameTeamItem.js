import Cleric from'../../Assets/Cleric.png';
import Wizzard from'../../Assets/Wizzard.png';
import Warrior from'../../Assets/Warrior.png';
import './GameTeamItem.css';
import { useState,useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const GameTeamItem = (props) =>{

    const [image, setImage] = useState();
    const [displayValue, setDisplayValue] = useState("none")

    useEffect(() => {
        if (props.Class==="Warrior"){
            setImage(Warrior)
        }else if(props.Class==="Wizzard"){
            setImage(Wizzard)
        }else(
            setImage(Cleric)
        )
    })

    const ShowModalStats = () =>{
        setDisplayValue("block")
    } 

    const HideModalStats = () =>{
        setDisplayValue("none")
    }

    return(
        <div className={`TeamItem ${props.Rarity}`}>
            <h4>{props.Class}</h4>
            <img src={image} />
            <div id="buttonGroup">
                <button id="statsButton" onClick={ShowModalStats}>Stats</button>
                <button id="unequipButton" onClick={props.Unequip}>Unequip</button>
            </div>
            <OutsideClickHandler onOutsideClick={HideModalStats}>
            <div id="statsModal" style={{display:displayValue}}>
                <p>HP:{props.HP}</p>
                <p>Speed:{props.Speed}</p>
                <p>MagicArmor:{props.MagicArmor}</p>
                <p>PhysArmor:{props.PhysArmor}</p>
                <p>MagicAttack:{props.MagicAttack}</p>
                <p>PhysAttack:{props.PhysAttack}</p>
            </div>
            </OutsideClickHandler >
        </div>
    )
}

export default GameTeamItem;