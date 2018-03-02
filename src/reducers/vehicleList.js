const vehicleList = (
  state = { vehicleList: {}, searchTermMap: {} },
  action
) => {
  switch (action.type) {
    case "ADD_VEHICLES":
      const vehicleList = [
        ...action.vehicleList.reduce((a, c) => {
          a.add(JSON.stringify(c));
          return a;
        }, new Set())
      ].reduce((a, c, i) => {
        const obj = JSON.parse(c);
        a[i] = {
          key: i,
          ...obj,
          created_at: new Date(obj.created_at),
          searchTerms: [
            obj.year,
            obj.make.toLowerCase(),
            obj.model.toLowerCase()
          ]
        };
        return a;
      }, {});

      const searchTermMap = Object.entries(vehicleList).reduce((a, c) => {
        c[1].searchTerms.forEach(t => {
          if (!a[t]) a[t] = [];
          a[t].push(c[0]);
        });
        return a;
      }, {});

      return { vehicleList, searchTermMap };

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
