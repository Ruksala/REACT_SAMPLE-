import React from "react";

// import FirstComponent from "./components/test";
import SearchAppBar from "./components/Material/Navbar";
// import Layout from "./components/Material/Layout";
import FormComponent from "./components/Material/form";
import Login from "./components/Login";
import State from "./components/State_ex";
function App() {
  return (
    <div>
      {/* <FirstComponent /> */}
      <SearchAppBar />
      {/* <Layout /> */}
      <FormComponent />

      <Login />
      <State />
    </div>
  );
}

export default App;
