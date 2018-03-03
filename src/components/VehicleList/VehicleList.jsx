// library imports
import React, { Component } from "react";

// component imports
import { Table, Modal, Button, Card } from "antd";

const columns = [
  {
    title: "Year",
    dataIndex: "year",
    key: "year"
  },
  {
    title: "Make",
    dataIndex: "make",
    key: "make"
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model"
  },
  {
    title: "Mileage",
    dataIndex: "formattedMileage",
    key: "formattedMileage"
  }
];

class VehicleList extends Component {
  componentDidMount() {
    const { fetchVehicleListAndUpdateState } = this.props.actions;
    fetchVehicleListAndUpdateState();
  }

  render() {
    const { localState, actions } = this.props;
    const {
      displayedVehicleList,
      modalDisplayed,
      activeVehicleDetails
    } = localState;
    const { hideModal, showModal, setActiveVehicle } = actions;
    const {
      year,
      make,
      model,
      formattedMileage,
      image_url
    } = activeVehicleDetails;

    return (
      <Card className="app-item">
        <Table
          size="small"
          dataSource={displayedVehicleList}
          columns={columns}
          onRow={record => ({
            onClick: () => {
              setActiveVehicle(record);
              showModal();
            }
          })}
        />
        <Modal
          title={`${year} ${make} ${model} (${formattedMileage} miles)`}
          visible={modalDisplayed}
          onCancel={hideModal}
          footer={[
            <Button key="submit" type="primary" onClick={hideModal}>
              OK
            </Button>
          ]}
        >
          <img
            alt="vehicle"
            src={image_url}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Modal>
      </Card>
    );
  }
}

export default VehicleList;
