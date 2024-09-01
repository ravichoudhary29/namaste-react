import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "default",
      },
    };

    // console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, "Child component did mount");
    // API call
    const data = await fetch("https://api.github.com/users/ravichoudhary29");
    const res = await data.json();
    this.setState({
      userInfo: res,
    });
  }

  componentDidUpdate() {
    // console.log("Component did update.");
  }

  componentWillUnmount() {
    // console.log("Component will unmount.");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name, "Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @myself.ravikumar</h4>
      </div>
    );
  }
}
export default UserClass;
