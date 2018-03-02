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

    case "SORT_VEHICLE_LIST":
      const { field, order } = action;
      return [...state].sort((a, b) => {
        if (order === "descending") return b[field] - a[field];
        return a[field] - b[field];
      });

    default:
      return state;
  }
};

export default vehicleList;
