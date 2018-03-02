export const addVehicle = vehicle => {
  return {
    type: "ADD_VEHICLE",
    vehicle
  };
};

export const addVehicles = vehicleList => {
  return {
    type: "ADD_VEHICLES",
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
    type: "SORT_VEHICLE_LIST",
    field,
    order
  };
};
