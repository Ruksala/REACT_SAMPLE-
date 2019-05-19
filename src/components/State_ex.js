import React, { Component } from "react";
import { Button } from "@material-ui/core";
class State extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "ruk" };
  }
  changeName() {
    this.setState({ name: "pommi frd" });
  }
  render() {
    return (
      <div>
        <h3>hello {this.state.name}</h3>
        <button
          color="primary"
          variant="contained"
          type="submit"
          onClick={this.changeName}
        >
          changeName
        </button>
      </div>
    );
  }
}
export default State;
