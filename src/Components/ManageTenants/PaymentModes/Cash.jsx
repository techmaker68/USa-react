import {Col, Row, Form, Input, InputNumber, DatePicker} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";

function Cash() {
  return (
    <>
      <Row gutter={24}>
        <Col xs={24} lg={8}>
          <Form.Item label='Amount'>
            <InputNumber className='primary-input-number' />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item label='Received By'>
            <Input className='primary-input' size='large' />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item label='Payment Date'>
            <DatePicker
              clearIcon={false}
              suffixIcon={<img src={DatePickerIcon} alt='' />}
              className='primary-date-picker'
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Cash;
