// library imports
import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// component imports
import VehicleList from "./VehicleList";

// configuration for enzyme
configure({ adapter: new Adapter() });

// mock props to pass into presentational component
const mockProps = {
  localState: {
    activeVehicleDetails: {
      key: 1,
      formattedMileage: "21,587",
      year: 2013,
      make: "Hyundai",
      model: "Accent",
      mileage: 21587,
      drivetrain: "FWD",
      bodytype: "sedan",
      image_url:
        "http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg",
      created_at: "2016-11-14T20:13:22.586Z",
      searchTerms: ["2013", "hyundai", "accent"]
    },
    modalDisplayed: false,
    displayedVehicleList: [
      {
        key: 0,
        formattedMileage: "24,235",
        year: 2013,
        make: "Kia",
        model: "Optima",
        mileage: 24235,
        drivetrain: "FWD",
        bodytype: "sedan",
        image_url:
          "http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg",
        created_at: "2016-10-14T20:13:22.586Z",
        searchTerms: ["2013", "kia", "optima"]
      },
      {
        key: 1,
        formattedMileage: "21,587",
        year: 2013,
        make: "Hyundai",
        model: "Accent",
        mileage: 21587,
        drivetrain: "FWD",
        bodytype: "sedan",
        image_url:
          "http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg",
        created_at: "2016-11-14T20:13:22.586Z",
        searchTerms: ["2013", "hyundai", "accent"]
      }
    ]
  },
  actions: {
    dispatch: () => {},
    fetchVehicleListAndUpdateState: () => {}
  }
};

describe("list of vehicles", () => {
  it("should render with 0 vehicles", () => {
    const wrapper = mount(
      <VehicleList
        {...{
          ...mockProps,
          localState: {
            ...mockProps.localState,
            displayedVehicleList: []
          }
        }}
      />
    );
    wrapper.unmount();
  });

  it("should render with 2 vehicles", () => {
    const wrapper = mount(<VehicleList {...mockProps} />);
    wrapper.unmount();
  });

  it("should display a modal element when modalDisplayed is true", () => {
    const wrapper = mount(
      <VehicleList
        {...{
          ...mockProps,
          localState: {
            ...mockProps.localState,
            modalDisplayed: true
          }
        }}
      />
    );
    expect(wrapper.find("div .ant-modal-content").length).toBe(1);
    wrapper.unmount();
  });

  it("should not display a modal element when modalDisplayed is false", () => {
    const wrapper = mount(
      <VehicleList
        {...{
          ...mockProps,
          localState: {
            ...mockProps.localState,
            modalDisplayed: false
          }
        }}
      />
    );
    expect(wrapper.find("div .ant-modal-content").length).toBe(0);
    wrapper.unmount();
  });
});
