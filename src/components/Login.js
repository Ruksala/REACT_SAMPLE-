import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";
class Login extends Component {
  render() {
    return (
      <div align="center">
        <h2>LOGIN_PAGE</h2>

        <Input
          placeholder="hiii frds ..."
          disabled
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter ur name "
          style={{ width: "500px", margin: "10px" }}
        />
        <br />
        <Input
          placeholder="Enter email_id "
          style={{ width: "500px", margin: "10px" }}
        />

        <br />
        <Button variant="contained" color="primary">
          plz submit
        </Button>
      </div>
    );
  }
}

export default Login;
