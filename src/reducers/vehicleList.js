const vehicleList = (state = [], action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    default:
      return state;
  }
};

export default vehicleList;
