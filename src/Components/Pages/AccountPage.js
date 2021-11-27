import './AccountPage.css'
import Body from '../Shared/Body.js'

const AccountPage = () =>{
    return(
        <Body>
        <div id="AccountPage">
            <h1>Account details</h1>
            <h4>Name: </h4>
            <h4>Username: </h4>
            <h4>Email: </h4>
            <h4>Account creation date: </h4>
            <h1>Account game details</h1>
            <h4>Funds: </h4>
            <h4>Number of heroes owned: </h4>
            <h4>High score (EASY) :</h4>
            <h4>High score (NORMAL) :</h4>
            <h4>High score (HARD) :</h4>
        </div>
        <button id="editAccount">Edit account</button>
        <button id="deleteAccount">Delete account</button>
        </Body>
    );
}

export default AccountPage;