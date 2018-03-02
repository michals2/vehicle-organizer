// library imports
import React, { Component } from "react";

// component imports
import { Table } from "antd";

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
