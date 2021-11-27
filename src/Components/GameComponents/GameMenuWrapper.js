import GameMenuOptions from "./GameMenuOptions";
import {Outlet} from 'react-router-dom';

const GameMenuWrapper = () => {
  return (
    <div id="gameMainMenu">
      <GameMenuOptions />
      <Outlet />
    </div>
  );
};

export default GameMenuWrapper;
