import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Form, Input, Button, Card, message} from "antd";
import {useState, useEffect} from "react";
import Modules from "./Modules";
import {useParams} from "react-router-dom";
import Http from "Http";
import {UseAxios} from "Hooks/useAxios";
import {Rules} from "./../../../Constants/Global";
import {useHistory} from "react-router";

const UpdateRole = () => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  const {id} = useParams();

  // Fetch Data - http request
  const {
    response: data,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/roles/${id}`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  useEffect(() => {
    if (data !== null) setCheckedKeys(data?.scopes);
  }, [data]);

  const history = useHistory();

  // Update role
  const handleUpdateRole = (values) => {
    const formData = {
      name: values.name,
      description: values.description,
      scopes: checkedKeys,
    };

    Http.put(`/roles/${id}`, formData)
      .then((res) => {
        message.success("Role Updated Successfully");
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
              <span className='mt-0'>Update Role</span>
            </Link>
          </div>
          <Card bordered={false} loading={isLoading}>
            <Form
              layout='vertical'
              className='mr-30'
              onFinish={handleUpdateRole}
              initialValues={data}
            >
              {
                // content
              }
              <div className='d-flex justify-content-between'>
                <div>
                  <Form.Item
                    label='Role Name'
                    name='name'
                    rules={Rules.Required}
                  >
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
                    You can specify those modulesData in this role which you
                    want to give access to users.
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
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateRole;
