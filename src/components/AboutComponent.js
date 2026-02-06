import User from "./User";
import UserClass from "./UserClass";
// import React from "react"; or
import { Component } from "react";
import UserContext from "../utils/UserContext";

// class AboutComponent extends React.Component { or
class AboutComponent extends Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor")
    }

    componentDidMount(){
        // console.log("Parent component did mount")
    }

  render() {
    // console.log("Parent render")
    return (
      <div>
        <div>
          loggedInUser: 
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
          {/* <UserContext.Consumer> // can use multiple times
            {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer> */}
        </div>
        <UserClass name={"Sudheshna"} location={"Hyd"} />
        {/* <User name={"Sudheshna - function"}/> */}
        {/* <UserClass name={"class1"} location={"Hyd"} />
        <UserClass name={"class2"} location={"Hyd"} />
         */}
      </div>
    );
  }
}

// const AboutComponent = () => {
//     return (
//         <div>
//             {/* <User name={"Sudheshna - function"}/> */}
//             <UserClass name={"Sudheshna - class"} location={"Hyd"}/>
//         </div>
//     )
// }

export default AboutComponent;
