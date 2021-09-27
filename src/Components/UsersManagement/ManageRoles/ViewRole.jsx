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
          title: "",
          key: "viewPayments",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='View Payments' />
          ),
        },
        {
          title: "",
          key: "changeStatus",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Change Status' />
          ),
        },
      ],
    },
    {
      title: "Manage Tenants",
      key: "manageTenants",
      children: [
        {
          title: "",
          key: "registerTenant",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Register Tenant' />
          ),
        },
        {
          title: "",
          key: "viewTenant",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='View Tenant' />
          ),
        },
        {
          title: "",
          key: "updateTenant",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Update Tenant' />
          ),
        },
        {
          title: "",
          key: "upgradePlan",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Upgrade Plan' />
          ),
        },
        {
          title: "",
          key: "resetPassword",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Reset Password' />
          ),
        },
      ],
    },
    {
      title: "Demo Requests",
      key: "demoRequests",
      children: [
        {
          title: "",
          key: "viewRequest",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='View Request' />
          ),
        },
        {
          title: "",
          key: "approveRequest",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Approve Request' />
          ),
        },
        {
          title: "",
          key: "decline",
          icon: ({selected}) => (
            <TreeDataIcon selected={selected} title='Decline' />
          ),
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
              title: "",
              key: "user.create",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='Create User' />
              ),
            },
            {
              title: "",
              key: "updateUser",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='Update User' />
              ),
            },
            {
              title: "",
              key: "inactive",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='InActive' />
              ),
            },
            {
              title: "",
              key: "reset",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='Reset' />
              ),
            },
          ],
        },
        {
          title: "Manage Roles",
          key: "manageRoles",
          children: [
            {
              title: "",
              key: "rolesCreateUser",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='Create Role' />
              ),
            },
            {
              title: "",
              key: "viewRole",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='View Role' />
              ),
            },
            {
              title: "",
              key: "updateRole",
              icon: ({selected}) => (
                <TreeDataIcon selected={selected} title='Update Role' />
              ),
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

const TreeDataIcon = ({selected, title}) => {
  return selected ? (
    <div className='d-flex'>
      <img src={tickIcon} alt='' className='ml-20' />
      <span className='text-nowrap f-12 ml-4-px'>{title}</span>
    </div>
  ) : (
    <span className='text-nowrap ml-40 f-12 color-gray'>{title}</span>
  );
};
