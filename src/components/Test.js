import { Component } from "react"
import React from "react"
class Test extends React.Component{
  constructor(props) {
    super(props)
    console.log("Class 3 constructor")
  }
  componentDidMount(){
    console.log("class 3 component did mount")
  }

  render() {
    console.log("class 3 render")
    return(
      <div></div>
    )
  }
}

export default Test;