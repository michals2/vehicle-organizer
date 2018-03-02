import { combineReducers } from "redux";
import vehicleOrganizer from "./vehicleOrganizer";

const vehicleApp = combineReducers({
  vehicleOrganizer
});

export default vehicleApp;
