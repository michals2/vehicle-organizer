import moment from "moment";

const vehicleOrganizer = (
  state = {
    vehicleList: {},
    searchTermMap: {},
    searchString: "",
    displayedVehicleList: [],
    modalDisplayed: false,
    activeVehicleDetails: {}
  },
  action
) => {
  switch (action.type) {
    case "ADD_VEHICLES":
      const vehicleList = [
        ...action.vehicleList.reduce((a, c) => {
          const date = moment(c.created_at).local().toDate();
          const obj = { ...c, created_at: date };
          a.add(JSON.stringify(obj));
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
        c[1].searchTerms.forEach(fullTerm => {
          `${fullTerm}`.split(" ").forEach(t => {
            if (!a[t]) a[t] = new Set();
            a[t].add(c[0]);
          });
        });
        return a;
      }, {});

      const displayedVehicleList = Object.values(vehicleList);

      return { ...state, vehicleList, searchTermMap, displayedVehicleList };

    case "SORT_VEHICLE_LIST":
      const { field, order } = action;
      const newDisplayedVehicleList = state.displayedVehicleList.sort(
        (a, b) => {
          if (order === "descending") return b[field] - a[field];
          return a[field] - b[field];
        }
      );
      return { ...state, displayedVehicleList: newDisplayedVehicleList };

    case "FILTER_LIST_BY_STRING":
      const { string } = action;

      if (!string.length)
        return {
          ...state,
          displayedVehicleList: Object.values(state.vehicleList)
        };

      const vehiclesWithSearchTerms = string
        .split(" ")
        .map(t => state.searchTermMap[t.toLowerCase()]);

      if (vehiclesWithSearchTerms.some(v => v === undefined))
        return { ...state, displayedVehicleList: [] };

      const vehiclesWithAllSearchTerms = [
        ...vehiclesWithSearchTerms.reduce((a, c) => {
          return [...a].filter(x => c.has(x));
        }, vehiclesWithSearchTerms[0])
      ].map(v => state.vehicleList[v]);

      console.log({ vehiclesWithAllSearchTerms });

      return { ...state, displayedVehicleList: vehiclesWithAllSearchTerms };

    case "SHOW_MODAL":
      return { ...state, modalDisplayed: true };

    case "HIDE_MODAL":
      return { ...state, modalDisplayed: false };

    case "SET_ACTIVE_VEHICLE":
      return {
        ...state,
        activeVehicleDetails: action.details,
      };

    default:
      return state;
  }
};

export default vehicleOrganizer;
