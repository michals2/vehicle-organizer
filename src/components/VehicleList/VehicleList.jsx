// library imports
import React, { Component } from "react";

// css imports
import "./VehicleList.css";

class VehicleList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
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

// const VehicleList = ({ list, onComponentMount }) => {
//   // console.log(onComponentMount);
//   onComponentMount();
//   return (
//     <div>
//       {list.map((v, i) =>
//         <div key={i}>
//           {v.make}
//         </div>
//       )}
//     </div>
//   );
// };

export default VehicleList;
