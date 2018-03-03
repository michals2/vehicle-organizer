import vehicleOrganizer from "./vehicleOrganizer";
import * as types from "../actions/actionTypes";
import initialState from "../model";

describe("vehicle organizer main reducer", () => {
  describe("return the same state if a bad action is given", () => {
    const action = {
      type: "this is not a real action type",
      payload: 5
    };

    it("starting with the initial state", () => {
      expect(vehicleOrganizer(initialState, action)).toBe(initialState);
    });

    it("starting with the a non-initil state", () => {
      const nonInitialState = {
        vehicleList: { 1: {}, 2: {} },
        searchTermMap: {},
        displayedVehicleList: [{}],
        modalDisplayed: true,
        activeVehicleDetails: {}
      };

      expect(vehicleOrganizer(nonInitialState, action)).toBe(nonInitialState);
    });
  });
});
