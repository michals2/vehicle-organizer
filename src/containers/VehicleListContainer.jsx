// library imports
import { connect } from "react-redux";

// action imports
import { addVehicle, fetchVehicleListAndUpdateState } from "../actions";

// presentational component imports
import VehicleList from "../components/VehicleList/VehicleList";

const mapStateToProps = (state, ownProps) => {
  return { list: state.vehicleList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    fetchVehicleListAndUpdateState
  };
};

const VehicleListContainer = connect(mapStateToProps, mapDispatchToProps)(
  VehicleList
);
export default VehicleListContainer;
