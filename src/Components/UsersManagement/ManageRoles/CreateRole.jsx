import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Form, Input, Button, message} from "antd";
import Modules from "./Modules";
import {useState} from "react";
import Http from "Http";
import {useHistory} from "react-router";
import {Rules} from "Constants/Global";

const CreateRole = () => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  const history = useHistory();

  // create role

  const handleCreateRole = (values) => {
    const formData = {
      name: values.name,
      description: values.description,
      scopes: checkedKeys,
    };

    Http.post(`/roles`, formData)
      .then((res) => {
        message.success("Role Created Successfully");
        history.push("/users-management/manage-roles");
      })
      .catch((err) => {
        Object.keys(err.response.data).forEach((element) => {
          message.error(err.response.data[element][0]);
        });
      });
  };

  return (
    <Layout currentPage={4} title='User Management'>
      <div className='main-wrapper'>
        <div className='page-card'>
          <div className='page-card-header'>
            {
              // breadcrumbs
            }
            <Link to='/users-management/manage-roles' className='breadcrumb'>
              <img src={ArrowBack} alt='' />
              <span className='mt-0'>Create Role</span>
            </Link>
          </div>
          {
            // content
          }
          <Form layout='vertical' className='mr-30' onFinish={handleCreateRole}>
            <div className='d-flex justify-content-between'>
              <div>
                <Form.Item label='Role Name' name='name' rules={Rules.Required}>
                  <Input className='primary-input' />
                </Form.Item>
                <Form.Item label='Role Name' name='description'>
                  <Input.TextArea className='primary-textarea' />
                </Form.Item>
              </div>

              {
                // modulesData
              }
              <div className='modulesData-wrapper'>
                <h1 className='f-16 fw-700'>Modules</h1>
                <p className='f-12 fw-400'>
                  You can specify those modulesData in this role which you want
                  to give access to users.
                </p>

                <Modules
                  checkedKeys={checkedKeys}
                  setCheckedKeys={setCheckedKeys}
                />
              </div>
            </div>
            {
              // action
            }
            <div className='d-flex justify-content-end align-items-center mt-16'>
              <Link to='/users-management/manage-roles'>
                <Button className='default-button  btn-role mr-16'>
                  Cancel
                </Button>
              </Link>

              <Button htmlType='submit' className='primary-button  btn-role'>
                Create Role
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateRole;
