// library imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// action imports
import { fetchVehicleListAndUpdateState, sortVehicleList } from "../actions";

// presentational component imports
import VehicleList from "../components/VehicleList/VehicleList";

const mapStateToProps = (state, ownProps) => {
  return { state: { list: state.vehicleOrganizer.displayedVehicleList } };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ fetchVehicleListAndUpdateState }, dispatch)
  };
};

const VehicleListContainer = connect(mapStateToProps, mapDispatchToProps)(
  VehicleList
);
export default VehicleListContainer;
