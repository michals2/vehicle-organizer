const vehicleList = (
  state = [{ make: "test1" }, { make: "test2" }],
  action
) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return [
        ...state,
        {
          ...action.vehicle
        }
      ];

    default:
      return state;
  }
};

export default vehicleList;
