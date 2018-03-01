// library imports
import { connect } from "react-redux";

// action imports
import { addVehicle } from "../actions";

// presentational component imports
import VehicleList from "../components/VehicleList/VehicleList";

const mapStateToProps = (state, ownProps) => {
  return { list: state.vehicleList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onClick: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter));
    // }
  };
};

const VehicleListContainer = connect(mapStateToProps, mapDispatchToProps)(
  VehicleList
);
export default VehicleListContainer;
