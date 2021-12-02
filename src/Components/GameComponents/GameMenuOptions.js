import {Link} from 'react-router-dom'
import './GameMenuOptions.css'

const GameMenuOptions = () => {
  return (
    <div className="gameInventoryCol" id="gameInventoryToolbar">
      <Link to={'inventory'} className="gameMenuOption">Inventory</Link>
      <Link to={'shop'} className="gameMenuOption">Shop</Link>
      <Link to={'team'} className="gameMenuOption">Team</Link>
      <Link to={'leaderboard'} className="gameMenuOption">Leaderboard</Link>
      <Link to={'play'} className="gameMenuOption">Play</Link>
      <Link to={"news"} className="gameMenuOption">News</Link>
    </div>
  );
};

export default GameMenuOptions;
