
import React from "react"

const Credentials = React.createContext({
    userLoggedIn:false,
    currentUser:"",
    currentFunds:0
}); 

export default Credentials;