const vehicleList = (state = [], action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return [...state, action.vehicle];

    case "ADD_VEHICLES":
      const vehicleListWithKeys = action.vehicleList.map((c, i) => ({
        ...c,
        key: i
      }));
      return [...state, ...vehicleListWithKeys];

    default:
      return state;
  }
};

export default vehicleList;
