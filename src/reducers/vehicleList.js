const vehicleList = (state = [], action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return [...state, action.vehicle];

    case "ADD_VEHICLES":
      return [...state, ...action.vehicleList];

    default:
      return state;
  }
};

export default vehicleList;
