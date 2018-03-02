// library imports
import React, { Component } from "react";

// css imports
import "./VehicleList.css";

// component imports
import Button from "antd/lib/button";

class VehicleList extends Component {
  componentDidMount() {
    const { dispatch, fetchVehicleListAndUpdateState } = this.props;
    dispatch(fetchVehicleListAndUpdateState());
  }

  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
        {this.props.list.map((v, i) =>
          <div key={i}>
            {v.make}
          </div>
        )}
      </div>
    );
  }
}

export default VehicleList;
