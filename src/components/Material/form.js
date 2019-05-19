import React, { Component } from "react";
import { button, Input, Button } from "@material-ui/core";
class FormComponent extends Component {
  render() {
    return (
      <div align="center">
        <h2>Form Component</h2>

        <Input
          placeholder="Enter Name"
          disabled
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter age"
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter email_id "
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter Name"
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter Name"
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Button variant="contained" color="primary">
          Submit Details here
        </Button>
      </div>
    );
  }
}

export default FormComponent;
