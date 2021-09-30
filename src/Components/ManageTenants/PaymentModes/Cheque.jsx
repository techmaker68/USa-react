import {
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
  message,
  InputNumber,
} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Rules} from "Constants/Global";

const {Option} = Select;
const {Dragger} = Upload;
function Cheque({planAmount, setAttachment, attachment, disable}) {
  const props = {
    name: "file",
    onChange(info) {
      const {status} = info.file;
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      // console.log("Dropped files", e.dataTransfer.files);
    },
    beforeUpload: (file) => {
      return false;
    },
  };

  const handleFileChange = (fileObj) => {
    if (fileObj && !fileObj.file.status) setAttachment([fileObj.file]);
    else setAttachment([]);
  };

  return (
    <>
      <div className='d-flex gap-24'>
        <div className='w-270'>
          <Form.Item label='Receipt Picture' rules={Rules.Required}>
            <Dragger
              multiple={false}
              {...props}
              className='primary-upload-dragger'
              onChange={handleFileChange}
              fileList={Array.isArray(attachment) ? attachment : []}
              onRemove={() => handleFileChange(null)}
            >
              <p className='ant-upload-drag-icon'></p>
              <p className='ant-upload-text f-12 fw-500'>
                Drag & drop file to upload
                <span className='d-block f-12'>Or</span>
                <u className='f-12 fw-500 color-info'>Browse</u>
              </p>
            </Dragger>
            <p
              className={
                attachment.length > 0 || attachment === "default"
                  ? "d-none"
                  : "error-message"
              }
            >
              Field is required.
            </p>
          </Form.Item>
        </div>
        <div>
          <div className='d-flex gap-24'>
            <div>
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
                <Form.Item label='Amount' name='Amount' rules={Rules.Required}>
                  <InputNumber
                    className='primary-input-number'
                    max={disable?.max}
                  />
                </Form.Item>
              )}
              <Form.Item label='Payee Name' name='PayeeName' rules={Rules.Name}>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Received By'
                name='receivedBy'
                rules={Rules.Name}
              >
                <Input className='primary-input' size='large' />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                label='Bank Name'
                name='BankName'
                rules={Rules.Required}
              >
                <Select
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  <Option value='Ahmad bilaar bin Abdul Aziz'>
                    Ahmad bilaar bin Abdul Aziz
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label='Cheque Number'
                name='ChequeNumber'
                rules={Rules.ChequeNumber}
              >
                <InputNumber className='primary-input-number hide-controls' />
              </Form.Item>

              <Form.Item
                label='Cheque Date'
                name='ChequeDate'
                rules={Rules.Required}
              >
                <DatePicker
                  clearIcon={false}
                  suffixIcon={<img src={DatePickerIcon} alt='' />}
                  className='primary-date-picker'
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cheque;
