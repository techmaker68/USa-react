import {Form, Input, InputNumber, DatePicker} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";

function Cash() {
  return (
    <div className='d-flex gap-24'>
      <Form.Item label='Amount'>
        <InputNumber className='primary-input-number' />
      </Form.Item>

      <Form.Item label='Received By'>
        <Input className='primary-input' size='large' />
      </Form.Item>

      <Form.Item label='Payment Date'>
        <DatePicker
          clearIcon={false}
          suffixIcon={<img src={DatePickerIcon} alt='' />}
          className='primary-date-picker'
        />
      </Form.Item>
    </div>
  );
}

export default Cash;
