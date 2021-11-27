import './GameAccountPage.css';
import Portret from '../../Assets/user_image.png'

const GameAccountPage = () =>{
    return(
        <div id="gameAccount">
            <div className="gameAccountRow">
                <div className="gameAccountColumn" id="accountPortretDiv">
                    <img src={Portret} id="accountPortret" />
                </div>
                <div className="gameAccountColumn" id="accountInfoDiv">
                    <h2>Username:</h2>
                    <h4>Acount creation:</h4>
                    <h4>Account id:</h4>
                </div>
            </div>
            <hr/>
            <div className="gameAccountRow">
                <div className="gameAccountColumn Stats" id="borderedColumn">
                    <h3>Funds:</h3>
                    <h3>Inventory size:</h3>
                </div>
                <div className="gameAccountColumn Stats">
                    <h2>High Scores</h2>
                    <h3>Hard:</h3>
                    <h3>Normal:</h3>
                    <h3>Easy:</h3>
                </div>
            </div>

        </div>
    );
}

export default GameAccountPage;