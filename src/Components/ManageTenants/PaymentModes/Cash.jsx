import { Col, Row, Form, Input, InputNumber, DatePicker } from "antd";
import React from "react";

function Cash() {
  return (
    <>
      <Row gutter={24}>
        <Col xs={24} lg={12}>
          <Form.Item label="Amount">
            <InputNumber className="w-100" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item label="Recieved By">
            <Input className="w-100" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item label="Payment Date">
            <DatePicker className="w-100" size="large" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Cash;
