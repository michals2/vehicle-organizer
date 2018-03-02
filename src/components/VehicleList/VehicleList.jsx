// library imports
import React, { Component } from "react";

// css imports
import "./VehicleList.css";

class VehicleList extends Component {
  constructor(props) {
    super(props);
    // console.log({ props });
  }

  componentDidMount() {
    const { dispatch, fetchVehicleListAndUpdateState } = this.props;
    dispatch(fetchVehicleListAndUpdateState());
  }

  render() {
    return (
      <div>
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
