import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    
    return(
        <div>
            <h1>Login</h1>
            {/* <h1>{loggedInUser} - {test}</h1> */}
            <lable>UserName: </lable>
            <input type="text" value="username"/>
        </div>
    )
}

export default Contact;