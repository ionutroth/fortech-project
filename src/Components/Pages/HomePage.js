import Body from '../Shared/Body.js';
import './HomePage.css';


const HomePage = () => {
    return (
        <Body>
            <div className="homePageOption">
                <p className="homePageTitle">Welcome</p>
                <p className="homePageContent">This project was made during a training at Fortech. Feel free to browse it, play the game and find out more about me or the project.</p>
                <div className="homePageLink" id="linkAbout">Find out more</div>
            </div>
            <hr/>
            <div className="homePageOption">
                <p className="homePageTitle">The game</p>
                <p className="homePageContent">Sign in and play the game. It is a simple turned base strategy game. Collect heroes and forget about them.</p>
                <div className="homePageLink" id="linkGame">Try it out</div>
            </div>
            <hr/>
            <div className="homePageOption">
                <p className="homePageTitle">Contact</p>
                <p className="homePageContent">Find out more about the owner/developer of this project. </p>
                <div className="homePageLink" id="linkContact">Read more</div>
            </div>
            
        </Body>
    );
}

export default HomePage;