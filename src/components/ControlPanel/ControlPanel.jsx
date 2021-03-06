// library imports
import React from "react";

// component imports
import { Input, Button, Card, Row, Col } from "antd";

const ControlPanel = ({ actions }) => {
  const { sortVehicleList, filterListByString } = actions;
  return (
    <Card className="app-item">
      <Row type="flex" justify="space-around" align="middle" gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Input
            placeholder="Search by year, make or model"
            onPressEnter={e => filterListByString(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Row>
            <span>Sort By: </span>
          </Row>
          <Row>
            <Button
              size="small"
              type="primary"
              onClick={() => sortVehicleList("year", "ascending")}
              style={{ margin: "5px" }}
            >
              Year (oldest to newest)
            </Button>
          </Row>
          <Row>
            <Button
              size="small"
              type="primary"
              onClick={() => sortVehicleList("mileage", "descending")}
              style={{ margin: "5px" }}
            >
              Mileage (highest to lowest)
            </Button>
          </Row>
          <Row>
            <Button
              size="small"
              type="primary"
              onClick={() => sortVehicleList("created_at", "descending")}
              style={{ margin: "5px" }}
            >
              Listing date (newest to oldest)
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ControlPanel;
