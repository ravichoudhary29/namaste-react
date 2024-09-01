import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //  console.log("Parent Constructor");
  }

  componentDidMount() {
    //  console.log("Parent component did mount");
  }
  render() {
    //   console.log("Parent Render");
    return (
      <div>
        <h1>About component</h1>
        <h2>This is Namaste React Web Series.</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h3 className=" font-bold text-2xl">{loggedInUser}</h3>
          )}
        </UserContext.Consumer>
        <UserClass name={"First Child (class)"} location={"Dehradun (class)"} />
      </div>
    );
  }
}

export default About;
