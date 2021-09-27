import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Button} from "antd";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import tickIcon from "Assets/icons/tickIcon.svg";
import {Tree} from "antd";
import {useState} from "react";
import {UseAxios} from "Hooks/useAxios";
import {useParams} from "react-router-dom";

const ViewRole = () => {
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
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "Change Status",
          key: "changeStatus",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
      ],
    },
    {
      title: "Manage Tenants",
      key: "manageTenants",
      children: [
        {
          title: "Register Tenant",
          key: "registerTenant",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "View Tenant",
          key: "viewTenant",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "Update Tenant",
          key: "updateTenant",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "Upgrade plan",
          key: "upgradePlan",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "Reset Password",
          key: "resetPassword",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
      ],
    },
    {
      title: "Demo Requests",
      key: "demoRequests",
      children: [
        {
          title: "View Request",
          key: "viewRequest",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "Approve Request",
          key: "approveRequest",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
        {
          title: "Decline",
          key: "decline",
          icon: ({selected}) => (selected ? <img src={tickIcon} alt='' /> : ""),
        },
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
            {
              title: "Create User",
              key: "user.create",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
            {
              title: "Update User",
              key: "updateUser",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
            {
              title: "Inactive",
              key: "inactive",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
            {
              title: "Reset",
              key: "reset",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
          ],
        },
        {
          title: "Manage Roles",
          key: "manageRoles",
          children: [
            {
              title: "Create User",
              key: "rolesCreateUser",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
            {
              title: "View Role",
              key: "viewRole",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
            {
              title: "Update Role",
              key: "updateRole",
              icon: ({selected}) =>
                selected ? <img src={tickIcon} alt='' /> : "",
            },
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
            <div>
              <h6 className='f-12 fw-500 color color-green-spring'>
                Role Name
              </h6>
              <p className='f-14 fw-500 mb-24'>{data?.name}</p>
              <h6 className='f-12 fw-500 color color-green-spring'>
                Description
              </h6>
              <p className='f-14 fw-500'>{data?.description}</p>
            </div>

            {
              // modulesData
            }
            <div className='modulesData-wrapper'>
              <h1 className='f-16 fw-700'>Modules</h1>
              <p className='f-12 fw-400'>
                You can specify those modulesData in this role which you want to
                give access to users.
              </p>

              {<ViewModule treeData={treeData} keys={data?.scopes} />}
            </div>
          </div>
          {
            // action
          }
          <div className='d-flex justify-content-end align-items-center mt-16'>
            <Button className='default-button  btn-role mr-16'>Cancel</Button>
            <Button className='primary-button  btn-role'>Edit Role</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewRole;

const ViewModule = ({treeData, keys}) => {
  return (
    <div className='mb-15'>
      <Tree
        className='primary-tree'
        defaultExpandAll
        defaultSelectedKeys={["0-0-0"]}
        treeData={treeData}
        switcherIcon={<img src={SelectArrowDownIcon} alt='' />}
        selectedKeys={keys}
        showIcon
      />
    </div>
  );
};
