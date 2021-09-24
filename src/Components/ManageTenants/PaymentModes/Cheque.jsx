import {Form, Input, DatePicker, Select, Upload, message} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";

const {Option} = Select;
const {Dragger} = Upload;
function Cheque({planAmount, setAttachment, attachment}) {
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
      console.log("Dropped files", e.dataTransfer.files);
    },
    beforeUpload: (file) => {
      return false;
    },
  };
  console.log("attachment", attachment);

  const handleFileChange = (fileObj) => {
    console.log("fileObj", fileObj);
    if (fileObj && !fileObj.file.status) setAttachment([fileObj.file]);
    else setAttachment([]);
  };

  return (
    <>
      <div className='d-flex gap-24'>
        <div>
          <Form.Item label='Receipt Picture' name='Attachement'>
            <Dragger
              multiple={false}
              {...props}
              className='primary-upload-dragger'
              onChange={handleFileChange}
              fileList={attachment}
              onRemove={() => handleFileChange(null)}
            >
              <p className='ant-upload-drag-icon'></p>
              <p className='ant-upload-text f-12 fw-500'>
                Drag & drop file to upload
                <span className='d-block f-12'>Or</span>
                <u className='f-12 fw-500 color-info'>Browse</u>
              </p>
            </Dragger>
          </Form.Item>
        </div>
        <div>
          <div className='d-flex gap-24'>
            <div>
              <Form.Item label='Amount' name='Amount'>
                <Input
                  className='primary-input'
                  suffix={<span className='input-domain-suffix'>SAR</span>}
                  value={planAmount?.amount}
                  defaultValue={planAmount?.amount}
                  disabled
                />
              </Form.Item>
              <Form.Item label='Payee Name' name='PayeeName'>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Received By' name='ReceivedBy'>
                <Select
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  <Option>Ahmad bilaar bin Abdul Aziz</Option>
                </Select>
              </Form.Item>
            </div>

            <div>
              <Form.Item label='Bank Name' name='BankName'>
                <Select
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  <Option>Ahmad bilaar bin Abdul Aziz</Option>
                </Select>
              </Form.Item>
              <Form.Item label='Cheque Number' name='ChequeNumber'>
                <Input className='primary-input' />
              </Form.Item>

              <Form.Item label='Cheque Date' name='ChequeDate'>
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
