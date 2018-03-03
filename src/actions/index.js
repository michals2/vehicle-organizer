import * as types from "./actionTypes";

export const addVehicles = vehicleList => {
  return {
    type: types.ADD_VEHICLES,
    vehicleList
  };
};

function fetchVehicleList() {
  return fetch(
    "https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json"
  );
}

export function fetchVehicleListAndUpdateState() {
  return function(dispatch) {
    return fetchVehicleList()
      .then(response => response.json(), error => console.log(error))
      .then(json => dispatch(addVehicles(json)));
  };
}

export const sortVehicleList = (field, order) => {
  return {
    type: types.SORT_VEHICLE_LIST,
    field,
    order
  };
};

export const filterListByString = string => {
  return {
    type: types.FILTER_LIST_BY_STRING,
    string
  };
};

export const setActiveVehicle = details => {
  return {
    type: types.SET_ACTIVE_VEHICLE,
    details
  };
};

export const showModal = () => {
  return {
    type: types.SHOW_MODAL
  };
};

export const hideModal = () => {
  return {
    type: types.HIDE_MODAL
  };
};
