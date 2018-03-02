// library imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// action imports
import { sortVehicleList, filterListByString } from "../actions";

// presentational component imports
import ControlPanel from "../components/ControlPanel/ControlPanel";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      { sortVehicleList, filterListByString },
      dispatch
    )
  };
};

const ControlPanelContainer = connect(null, mapDispatchToProps)(ControlPanel);
export default ControlPanelContainer;
