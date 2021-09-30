import {Modal, Form, Input, Select, Button, Card, message} from "antd";
import ModalCloseIcon from "Assets/icons/modalClose.svg";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Rules} from "Constants/Global";
import {UseAxios} from "Hooks/useAxios";
import Http from "Http";
import {useState} from "react";

const {Option} = Select;

const UserModal = ({
  isModalVisible,
  setIsModalVisible,
  primaryButtonTitle,
  data = {},
  requestDetail,
  setFilters,
  filters,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // fetch user roles
  const {
    response: roles,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/roles`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // create user - http request
  const handleFormSubmit = (values) => {
    const formData = {
      fullName: values?.fullName,
      userName: values?.userName,
      email: values?.email,
      roleId: values?.roleId,
      gender: values?.gender,
      isActive: values?.isActive,
    };

    Http[requestDetail?.method](`${requestDetail.apiEndPoint}`, formData)
      .then((res) => {
        setFilters({...filters, refresh: !filters.refresh});
        setIsModalVisible(false);
        message.success("User created successfully");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          Object.keys(err.response.data).forEach((element) => {
            message.error(err.response.data[element][0]);
          });
        }
      });
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
      <Card bordered={false} loading={isLoading}>
        <Form
          initialValues={data}
          layout='vertical'
          className='form-primary'
          onFinish={handleFormSubmit}
        >
          <div className='d-flex gap-24'>
            <div>
              <Form.Item name='fullName' label='Full Name' rules={Rules.Name}>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Role' name='roleId' rules={Rules.Required}>
                <Select
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  {Array.isArray(roles) &&
                    roles.map((role) => (
                      <Option key={role?.id} value={role?.id}>
                        {role?.name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label='User Name'
                name='userName'
                rules={Rules.Required}
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Gender' name='gender' rules={Rules.Required}>
                <Select
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  <Option value={0}>Male</Option>
                  <Option value={1}>Female</Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item label='Email' name='email' rules={Rules.Email}>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Status' name='isActive' rules={Rules.Required}>
                <Select
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option status-select-option'
                >
                  <Option value={true}>Active</Option>
                  <Option value={false}>InActive</Option>
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
            <Button htmlType='submit' className='primary-button btn-cancel'>
              {primaryButtonTitle}
            </Button>
          </div>
        </Form>
      </Card>
    </Modal>
  );
};

export default UserModal;
