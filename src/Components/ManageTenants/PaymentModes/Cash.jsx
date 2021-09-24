import {Form, Input, DatePicker} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";

function Cash({planAmount}) {
  console.log("asd", planAmount);
  return (
    <div className='d-flex gap-24'>
      <Form.Item label='Amount'>
        <Input
          className='primary-input'
          value={planAmount?.amount}
          defaultValue={planAmount?.amount}
          disabled
        />
      </Form.Item>

      <Form.Item label='Received By' name='receivedBy'>
        <Input className='primary-input' size='large' />
      </Form.Item>

      <Form.Item label='Payment Date' name='paymentDate'>
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
