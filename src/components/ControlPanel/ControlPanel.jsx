// library imports
import React from "react";

// component imports
import Button from "antd/lib/button";

const ControlPanel = ({ actions }) => {
  const { sortVehicleList } = actions;
  return (
    <div>
      <Button
        type="primary"
        onClick={() => sortVehicleList("year", "ascending")}
      >
        Sort by vehicle year (oldest to newest)
      </Button>
      <Button
        type="primary"
        onClick={() => sortVehicleList("mileage", "descending")}
      >
        Sort by mileage (highest to lowest)
      </Button>
      <Button
        type="primary"
        onClick={() => sortVehicleList("created_at", "descending")}
      >
        Sort by listing date (newest to oldest)
      </Button>
    </div>
  );
};

export default ControlPanel;
