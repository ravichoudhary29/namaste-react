import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About component</h1>
        <h2>This is Namaste React Web Series.</h2>
        <UserClass
          name={"Akshay Saini (class)"}
          location={"Dehradun (class)"}
        />
      </div>
    );
  }
}

export default About;
