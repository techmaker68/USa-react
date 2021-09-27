import {Form, Input, DatePicker, InputNumber} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";

function Cash({planAmount, disable}) {
  return (
    <div className='d-flex gap-24'>
      {disable.amount ? (
        <Form.Item label='Amount'>
          <Input
            className='primary-input'
            value={planAmount?.amount}
            defaultValue={planAmount?.amount}
            disabled={disable?.amount ? "disabled" : ""}
          />
        </Form.Item>
      ) : (
        <Form.Item label='Amount' name='Amount'>
          <InputNumber className='primary-input-number' max={disable?.max} />
        </Form.Item>
      )}

      <Form.Item label='Received By' name='receivedBy'>
        <Input className='primary-input' size='large' />
      </Form.Item>

      <Form.Item label='Payment Date' name='PaymentDate'>
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
