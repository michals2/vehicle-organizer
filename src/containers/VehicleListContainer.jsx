// library imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// action imports
import {
  fetchVehicleListAndUpdateState,
  hideModal,
  showModal,
  setActiveVehicle
} from "../actions";

// presentational component imports
import VehicleList from "../components/VehicleList/VehicleList";

const mapStateToProps = (state, ownProps) => {
  const {
    displayedVehicleList,
    modalDisplayed,
    activeVehicleDetails
  } = state.vehicleOrganizer;

  return {
    localState: {
      displayedVehicleList,
      modalDisplayed,
      activeVehicleDetails
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        fetchVehicleListAndUpdateState,
        hideModal,
        showModal,
        setActiveVehicle
      },
      dispatch
    )
  };
};

const VehicleListContainer = connect(mapStateToProps, mapDispatchToProps)(
  VehicleList
);
export default VehicleListContainer;
