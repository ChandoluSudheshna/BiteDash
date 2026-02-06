import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
  //API call to check user authentication
  return true;
};

const HeaderComponent = ({ onSignInClick, user }) => {

  const onlineStatus = useOnlineStatus();

  const {loggedInUser, test} = useContext(UserContext);
  console.log(loggedInUser)

  return (
    <div className="header mt-3">
      <div className="Logo">
        <a href="/" className="Logolink">
          <h1>BiteDash</h1>
        </a>
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>
            Online Status : {onlineStatus ? '✅' : '🔴'}
          </li> */}
          <li>
            <Link to="/">Home</Link>
          </li>          
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/mobile">Offers</Link>
          </li>
          <li>
            <Link to="/contact">Help</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
      <div className="nav-items">
        <ul>
          <li className="icon">
            <FaCartPlus fontSize="1.5em" />
          </li>
          {/* {
                        isLoggedIn? <li><Button className="button" onClick={() => {setIsLoggedIn(false)}}>Sign out</Button></li> : 
                        <li><Button className="button" onClick={
                            // () => {setIsLoggedIn(true)} 
                            onSignInClick
                        }>Sign in</Button></li>
                    } */}
          {user ? (            
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>              
              <p className="m-2 font-bold">{test} - {loggedInUser}</p>
            </li>
            
          ) : (
            <li>
              <Button className="button" onClick={onSignInClick}>
                Sign in
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const Title = () => {
  return <div>hello</div>;
};

export default HeaderComponent;
