import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Form, Input, Button} from "antd";
import Modules from "./Modules";

const UpdateRole = () => {
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
            {title: "Create User", key: "CreateUser"},
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
          {
            // content
          }
          <div className='d-flex justify-content-between'>
            <Form layout='vertical' className='mr-30'>
              <Form.Item label='Role Name'>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Role Name'>
                <Input.TextArea className='primary-textarea' />
              </Form.Item>
            </Form>

            {
              // modulesData
            }
            <div className='modulesData-wrapper'>
              <h1 className='f-16 fw-700'>Modules</h1>
              <p className='f-12 fw-400'>
                You can specify those modulesData in this role which you want to
                give access to users.
              </p>

              <Modules treeData={treeData} />
            </div>
          </div>{" "}
          {
            // action
          }
          <div className='d-flex justify-content-end align-items-center mt-16'>
            <Button className='default-button  btn-role mr-16'>Cancel</Button>
            <Button className='primary-button  btn-role'>Create Role</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateRole;
