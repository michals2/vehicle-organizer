// library imports
import React from "react";

// component imports
import { Input, Button } from "antd";

const ControlPanel = ({ actions }) => {
  const { sortVehicleList, filterListByString } = actions;
  return (
    <div>
      <Input
        placeholder="Search by year, make or model"
        onPressEnter={e => filterListByString(e.target.value)}
      />
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
