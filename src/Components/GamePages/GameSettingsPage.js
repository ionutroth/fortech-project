import {Link} from 'react-router-dom';

import './GameSettingsPage.css'

const GameSettingsPage = () => {
    return (
        <div id="settingsPageWrapper">
            <div id="settingsPageOptions">
                <div className="settingsColumn">
                    <p className="columnTitle">Audio</p>
                    <hr className="settingsHr" />
                    <label className="settingsLabel" htmlFor="music">Music:</label>
                    <input className="settingsInput" type="checkbox" name="music" />
                    <br />
                    <label className="settingsLabel" htmlFor="actions">Actions:</label>
                    <input className="settingsInput" type="checkbox" name="actions" />
                    <hr className="settingsHr" style={{position:"absolute", bottom:"1px",left:"5%"}}/>

                </div>
                <div className="settingsColumn">
                    <p className="columnTitle">Video</p>
                    <hr className="settingsHr" />
                    <label className="settingsLabel" htmlFor="log">Show battle log:</label>
                    <input className="settingsInput" type="checkbox" name="log" />
                    <br />
                    <label className="settingsLabel" htmlFor="hpBars">Show HP bars:</label>
                    <input className="settingsInput" type="checkbox" name="hpBars" />
                    <br />
                    <label className="settingsLabel" htmlFor="hpBars">Show HP bars:</label>
                    <input className="settingsInput" type="checkbox" name="hpBars" />
                    <br />
                    <label className="settingsLabel" htmlFor="mpBars">Show MP bars:</label>
                    <input className="settingsInput" type="checkbox" name="mpBars" />
                    <br />
                    <label className="settingsLabel" htmlFor="turnNumber">Show turn number</label>
                    <input className="settingsInput" type="checkbox" name="turnNumber" />
                    <br />
                    <label className="settingsLabel" htmlFor="order">Show battle order</label>
                    <input className="settingsInput" type="checkbox" name="order" />
                    <hr className="settingsHr" />
                </div>
            </div>
            <div id="settingsPageButtonWrapper">
            <Link to={`account`} id="saveSettingsButton" disabled>
                Save
            </Link>
            </div>
        </div>

    );
}

export default GameSettingsPage;