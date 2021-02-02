import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import ListState from "./context/ListState";
function App() {
  return (
    <Fragment>
      <ListState>
        <Home />
      </ListState>
    </Fragment>
  );
}

export default App;
