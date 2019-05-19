import React, { Component } from "react";
import { Button } from "@material-ui/core";
class Evenhandles extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "", city: "" }
    };
  }
  componentDidMount() {
    //make any ajax request
    this.setState({
      person: { name: "ruk", city: "jaffna" }
    });
  }
  componentDidUpdate() {
    //because i couldn't come up with asimpler example of
    //componentDidUpdate
    console.log("Component has bee deleted", this.state);
  }
  render() {
    return (
      <div>
        <p>Name : {this.state.person.name}</p>
        <p>city : {this.state.person.city}</p>
      </div>
    );
  }
}
export default Evenhandles;
