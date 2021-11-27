import {Link} from "react-router-dom"

import './ModalWarning.css'

const ModalWarning = (props) =>{
    return(
        <>
            <div className={props.ModalWarningVisibility ? "modalWarningBackground" : "modalWarningBackgroundClosed"} onClick={props.HideModal}></div>
            <div className={props.ModalWarningVisibility ? "modalWarningDiv" : "modalWarningDivClosed"}>
                <h1>Acces denied</h1>
                <p>To play the game you must first SignIn or SignUp to continue.</p>
                <hr/>
                <div>
                    <button onClick={props.HideModal} >CLOSE</button>
                    <Link to={'authentification'} id="LinkButton" onClick={props.HideModal}>
                        SIGNIN
                    </Link>
                </div>
                
            </div>
        </>
    );
}

export default ModalWarning;