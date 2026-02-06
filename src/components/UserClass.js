import React from "react";
// import Test from "./Test";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);  
    this.state = {
      userInfo: {
        login:"dummy",
        id: "DefaultLoc",
        avatar_url: "url"
      }
      // count: 0,
      // abc: "jshd",
      // count1: 1,
    };
    console.log(this.props.name + " Child Constructor")
  }

  async componentDidMount(){
    // this.timer = setInterval(() => {
    //   console.log("test")
    // }, 1000);
    console.log(this.props.name + " Child component did mount")  
    const data = await fetch("https://api.github.com/users/sudheshna")
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    console.log(json)
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.state.count !== prevState.count) { // checking if previous value is not equal to current count
      //code
    }
    console.log("Component Did Update")
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log("Component will UnMount");
  }

  render() {
    // const { name, location } = this.props;
    // const { count, abc, count1 } = this.state;
    console.log(this.props.name + " Child render")
    const {login, id, avatar_url} = this.state.userInfo;
    // debugger; 
    return (
      <div className="about">
        <h1>About us</h1>
        <p>
          BiteDash is a new-age customer-first organisation offering an
          easy-to-use convenience platform, accessible through a unified app.
        </p> 
        <p>Name: {login}</p>
        <p>Location: {id}</p>
        <img src={avatar_url}/>
        <p>Contact: @abc</p>
        {/* <p>{this.state.count} - {this.state.abc}</p> */}
        {/* <p>
          {count} - {count1}- {abc}
        </p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              // count1: this.state.count1 + 1
              count1: count1 + 1,
            });
          }}
        >
          Increment
        </button> */}
        {/* <Test/> */}
      </div>
    );
  }
}

export default UserClass;
