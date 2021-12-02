import './GameTeamPage.css';

const GameTeamPage = () => {
  return (
    <div id="gameTeamPage">
      <div>
        <button id="sortCommonItems">Common</button>
        <button id="sortRareItems">Rare</button>
        <button id="sortEpicItems">Epic</button>
        <button id="sortLegendaryItems">Legendary</button>
        <button id="sortAllItems">All</button>
      </div>
      <div id="TeamRow">
          <div>
            
          </div>
          <div>
              
          </div>
          <div>
              
          </div>
      </div>
      <div id="HeroesList"></div>
    </div>
  );
};

export default GameTeamPage;
