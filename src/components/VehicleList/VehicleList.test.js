// library imports
import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// component imports
import VehicleList from "./VehicleList";

// configuration for enzyme
configure({ adapter: new Adapter() });

// mock list of vehicles
const mockVehicles = [
  {
    year: 2013,
    make: "Kia",
    model: "Optima",
    mileage: 24235,
    drivetrain: "FWD",
    bodytype: "sedan",
    image_url:
      "http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg",
    created_at: "2016-10-14T20:13:22.586Z"
  },
  {
    year: 2013,
    make: "Hyundai",
    model: "Accent",
    mileage: 21587,
    drivetrain: "FWD",
    bodytype: "sedan",
    image_url:
      "http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg",
    created_at: "2016-11-14T20:13:22.586Z"
  }
];

describe("list of vehicles", () => {
  it("should render with 1 vehicle", () => {
    const mockProps = {
      list: mockVehicles.slice(0, 1),
      dispatch: () => {},
      fetchVehicleListAndUpdateState: () => {}
    };
    const wrapper = mount(<VehicleList {...mockProps} />);
  });

});
