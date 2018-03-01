// library imports
import React from "react";

// css imports
import "./VehicleList.css";

const App = ({ list }, actions) => {
  return (
    <div>
      {list.map(v => v.make)}
    </div>
  );
};

export default App;
