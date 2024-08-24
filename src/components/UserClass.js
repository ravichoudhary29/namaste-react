import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child component did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Count2: {count2}</h2>
        <button
          onClick={() => {
            // Never update state variables directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 10,
            });
          }}
        >
          Count increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @myself.ravikumar</h4>
      </div>
    );
  }
}
export default UserClass;
