import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const loggedInUser = () => {
    //API call to check user authentication
    return true;
}

const HeaderComponent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="Logo">
                <a href="/" className="Logolink"><h1>BiteDash</h1></a>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/mobile">Mobile-App</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="nav-items">
                <ul>                   
                    <li className="icon">< FaCartPlus fontSize="1.5em"/></li>
                    {
                        isLoggedIn? <li><button className="button" onClick={() => {setIsLoggedIn(false)}}>Sign out</button></li> : 
                        <li><button className="button" onClick={() => {setIsLoggedIn(true)}}>Sign in</button></li>
                    }
                </ul>
            </div>
        </div>
    );
}

const Title = () => {
    return(
        <div>hello</div>
    )
}

export default HeaderComponent;