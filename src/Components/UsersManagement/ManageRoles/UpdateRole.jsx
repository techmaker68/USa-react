import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Form, Input, Button, Card} from "antd";
import {useState} from "react";
import Modules from "./Modules";
import {useParams} from "react-router-dom";
import Http from "Http";
import {UseAxios} from "Hooks/useAxios";

const UpdateRole = () => {
  const [checkedKeys, setCheckedKeys] = useState(["user.create"]);

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
  const treeData = [
    {
      title: "Dashboard",
      key: "dashboard",
    },
    {
      title: "Payments",
      key: "payments",
      children: [
        {
          title: "View Payments",
          key: "viewPayments",
        },
        {
          title: "Change Status",
          key: "changeStatus",
        },
      ],
    },
    {
      title: "Manage Tenants",
      key: "manageTenants",
      children: [
        {title: "Register Tenant", key: "registerTenant"},
        {title: "View Tenant", key: "viewTenant"},
        {title: "Update Tenant", key: "updateTenant"},
        {title: "Upgrade plan", key: "upgradePlan"},
        {title: "Reset Password", key: "resetPassword"},
      ],
    },
    {
      title: "Demo Requests",
      key: "demoRequests",
      children: [
        {title: "View Request", key: "viewRequest"},
        {title: "Approve Request", key: "approveRequest"},
        {title: "Decline", key: "decline"},
      ],
    },
    {
      title: "Users Management",
      key: "usersManagement",
      children: [
        {
          title: "Manage Users",
          key: "manageUsers",
          children: [
            {title: "Create User", key: "user.create"},
            {title: "Update User", key: "updateUser"},
            {title: "Inactive", key: "inactive"},
            {title: "Reset", key: "reset"},
          ],
        },
        {
          title: "Manage Roles",
          key: "manageRoles",
          children: [
            {title: "Create User", key: "rolesCreateUser"},
            {
              title: "View Role",
              key: "viewRole",
            },
            {title: "Update Role", key: "updateRole"},
          ],
        },
      ],
    },
  ];

  // create role

  const handleUpdateRole = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("name", values.description);
    formData.append("scopes", ["user.create"]);

    Http.put(`/roles/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => console.log("err", err));
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
          <Card loading={isLoading}>
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
                  <Form.Item label='Role Name' name='name'>
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
                    treeData={treeData}
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
