const vehicleList = (state = [], action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return [...state, action.vehicle];

    case "ADD_VEHICLES":
      const vehicles = [
        ...action.vehicleList.reduce((a, c) => {
          a.add(JSON.stringify(c));
          return a;
        }, new Set())
      ].map((c, i) => {
        const obj = JSON.parse(c);
        return {
          ...obj,
          key: i,
          created_at: new Date(obj.created_at)
        };
      });
      return [...state, ...vehicles];

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
