// library imports
import React from "react";

// css imports
import "./App.css";

// component imports
import VehicleListContainer from "../../containers/VehicleListContainer";
import ControlPanelContainer from "../../containers/ControlPanelContainer";

const App = () =>
  <div className="app">
    <ControlPanelContainer />
    <VehicleListContainer />
  </div>;

export default App;
