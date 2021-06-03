import * as React from 'react';
import {Row, Col} from "react-bootstrap";
import * as FontAwsome from "react-icons/fa";

const MainInfoBar = () => (
    <Row className="lanza-mainInfo d-flex align-items-center justify-content-center">
        <Col xs={12} md={4}>
          <Row className="d-flex align-items-center justify-content-center py-2 py-md-0">
            <span>{React.createElement(FontAwsome["FaRoad"], { size: 25 })}</span>
            <p>Less than 30 Min Arrival</p>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row className="d-flex align-items-center justify-content-center py-2 py-md-0">
            <span>{React.createElement(FontAwsome["FaPhone"], { size: 25 })}</span>
            <p>813-414-1127</p>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <Row className="d-flex align-items-center justify-content-center py-2 py-md-0">
            <span>{React.createElement(FontAwsome["FaMoneyCheckAlt"], { size: 25 })}</span>
            <p>Rate as Low as $45</p>
          </Row>
        </Col>
    </Row>
)

export default MainInfoBar;