import {Modal, Form, Input, Select, Button} from "antd";
import ModalCloseIcon from "Assets/icons/modalClose.svg";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";

const {Option} = Select;

const UserModal = ({
  isModalVisible,
  setIsModalVisible,
  primaryButtonTitle,
  data = {},
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      className='primary-modal'
      title='Create User'
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={false}
      closeIcon={<img src={ModalCloseIcon} alt='' />}
    >
      <Form initialValues={data} layout='vertical' className='form-primary'>
        <div className='d-flex gap-24'>
          <div>
            <Form.Item name='firstName' label='First Name'>
              <Input className='primary-input' />
            </Form.Item>
            <Form.Item label='First Name'>
              <Select
                suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                className='primary-select-option'
              >
                <Option>Support</Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item label='User Name'>
              <Input className='primary-input' />
            </Form.Item>
            <Form.Item label='Gender'>
              <Select
                suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                className='primary-select-option'
              >
                <Option>Male</Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item label='Email'>
              <Input className='primary-input' />
            </Form.Item>
            <Form.Item label='Status'>
              <Select
                suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                className='primary-select-option status-select-option'
              >
                <Option>Active</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        {
          // action
        }
        <div className='d-flex justify-content-end align-items-center'>
          <Button className='default-button mr-16' onClick={handleCancel}>
            Cancel
          </Button>
          <Button className='primary-button btn-cancel'>
            {primaryButtonTitle}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UserModal;
