// library imports
import React, { Component } from "react";

// css imports
import "./VehicleList.css";

// component imports
import Button from "antd/lib/button";
import Table from "antd/lib/table";

const columns = [
  {
    title: "Year",
    dataIndex: "year",
    key: "year"
  },
  {
    title: "Make",
    dataIndex: "make",
    key: "make"
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model"
  },
  {
    title: "Mileage",
    dataIndex: "mileage",
    key: "mileage"
  }
];

class VehicleList extends Component {
  componentDidMount() {
    const { fetchVehicleListAndUpdateState } = this.props.actions;
    fetchVehicleListAndUpdateState();
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Button
          type="primary"
          onClick={() => actions.sortVehicleList("year", "ascending")}
        >
          Sort by vehicle year (oldest to newest)
        </Button>
        <Button
          type="primary"
          onClick={() => actions.sortVehicleList("mileage", "descending")}
        >
          Sort by mileage (highest to lowest)
        </Button>
        <Button
          type="primary"
          onClick={() => actions.sortVehicleList("created_at", "descending")}
        >
          Sort by listing date (newest to oldest)
        </Button>
        <Table
          dataSource={state.list}
          columns={columns}
          onRow={record => ({
            onClick: () => {
              console.log(record);
            }
          })}
        />
      </div>
    );
  }
}

export default VehicleList;
