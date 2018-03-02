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
  }
];

class VehicleList extends Component {
  componentDidMount() {
    const { dispatch, fetchVehicleListAndUpdateState } = this.props;
    dispatch(fetchVehicleListAndUpdateState());
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <Button type="primary">Button</Button>
        {/* {this.props.list.map((v, i) =>
          <div key={i}>
            {v.make}
          </div>
        )} */}
        <Table dataSource={list} columns={columns} />
      </div>
    );
  }
}

export default VehicleList;
