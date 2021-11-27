import Body from '../Shared/Body';
import './GamePage.css';
import GameToolbar from '../GameComponents/GameToolbar';
import { Outlet } from 'react-router-dom'
import React from 'react';


const GamePage = () => {

    return(
        <Body>
            <div id="hideExces">
            <GameToolbar/>
            <div id="gameWindow">
                <Outlet/>
            </div>
            </div>
        </Body>
    );
}

export default GamePage;