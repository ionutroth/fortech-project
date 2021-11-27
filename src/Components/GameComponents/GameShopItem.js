import './GameShopItem.css';
import {GiTwoCoins} from 'react-icons/gi'

const GameShopItem = (props) =>{
    return(
        <div className="gameShopItem" style={props.OuterStyle}>
            <div style={props.InnerStyle}>
                <h5>{props.Name}</h5>
                <img src={props.Image} className="i" />
                <p><b>{props.Price} </b><GiTwoCoins siz={40} /></p>
                
            </div>
        </div>
    );
}

export default GameShopItem;