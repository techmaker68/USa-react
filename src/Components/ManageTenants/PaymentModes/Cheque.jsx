import { Col, Row, Form, Input, InputNumber, DatePicker, Select } from "antd";
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
          <Form.Item label="Bank Name">
            <Input className="w-100" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item label="Payee Name">
            <Input className="w-100" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item label="Cheque Number">
            <Input className="w-100" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item label="Received By">
            <Select className="w-100"></Select>
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item label="Cheque Date">
            <DatePicker format="MM-DD-YYYY" className="w-100" size="large" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Cash;
