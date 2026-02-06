import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const {loggedInUser, test} = useContext(UserContext);
    return(
        <div>
            <h1>Contact</h1>
            <h1>{loggedInUser} - {test}</h1>
        </div>
    )
}

export default Contact;