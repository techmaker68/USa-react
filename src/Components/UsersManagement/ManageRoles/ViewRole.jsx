import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Button} from "antd";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import tickIcon from "Assets/icons/tickIcon.svg";
import {Tree} from "antd";
import {useState, useEffect} from "react";
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
          key: "payments:all",
          icon: (e) => {
            return (
              <TreeDataIcon
                scopes={data?.scopes}
                childKey='payments:all'
                title='View Payments'
              />
            );
          },
        },
        {
          title: "",
          key: "payments:create",
          icon: (e) => (
            <TreeDataIcon
              scopes={data?.scopes}
              childKey='payments:create'
              title='Create Payments'
            />
          ),
        },
        {
          title: "",
          key: "payments:detail",
          icon: ({selected}) => (
            <TreeDataIcon
              scopes={data?.scopes}
              childKey='payments:detail'
              title='Payment Details'
            />
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
          key: "tenants:create",
          icon: ({selected}) => (
            <TreeDataIcon
              scopes={data?.scopes}
              childKey='tenants:create'
              title='Create Tenant'
            />
          ),
        },
        {
          title: "",
          key: "tenants:all",
          icon: ({selected}) => (
            <TreeDataIcon
              scopes={data?.scopes}
              childKey='tenants:all'
              title='View Tenants'
            />
          ),
        },
        {
          title: "",
          key: "tenants:update",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='tenants:update'
              title='Update Tenants'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "tenants:upgradeplan",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='tenants:upgradeplan'
              title='Upgrade Plan'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "tenants:disable",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='tenants:disable'
              title='Disable Tenant'
              scopes={data?.scopes}
            />
          ),
        }, // active - inactive
      ],
    },
    {
      title: "Demo Requests",
      key: "demoRequests",
      children: [
        {
          title: "",
          key: "demorequests:all",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='demorequests:all'
              title='View Requests'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "demorequests:detail",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='demorequests:detail'
              title='Request Detail'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "demorequests:changestatus",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='demorequests:changestatus'
              title='Change Request Status'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "demorequests:extenddate",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='demorequests:extenddate'
              title='Extend Date'
              scopes={data?.scopes}
            />
          ),
        },
      ],
    },
    {
      title: "Plans",
      key: "plans",
      children: [
        {
          title: "",
          key: "plans:all",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='plans:all'
              title='View Plans'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "plans:detail",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='plans:detail'
              title='Plan Detail'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "plans:create",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='plans:create'
              title='Create Plan'
              scopes={data?.scopes}
            />
          ),
        },
        {
          title: "",
          key: "plans:update",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='plans:update'
              title='Update Plan'
              scopes={data?.scopes}
            />
          ),
        },
      ],
    },
    {
      title: "Configurations",
      key: "configurations",
      children: [
        {
          title: "",
          key: "configuration:detail",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='configuration:detail'
              scopes={data?.scopes}
              title='General Settings'
            />
          ),
        },
        {
          title: "",
          key: "configuration:update",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='configuration:update'
              scopes={data?.scopes}
              title='Update General Settings'
            />
          ),
        },
      ],
    },
    {
      title: "Business Details",
      key: "businessDetails",
      children: [
        {
          title: "",
          key: "businessinfo:detail",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='businessinfo:detail'
              scopes={data?.scopes}
              title='Business Details'
            />
          ),
        },
        {
          title: "",
          key: "businessinfo:update",
          icon: ({selected}) => (
            <TreeDataIcon
              childKey='businessinfo:update'
              scopes={data?.scopes}
              title='Update Business Details'
            />
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
              key: "users:all",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='users:all'
                  title='View Users'
                  scopes={data?.scopes}
                />
              ),
            },
            {
              title: "",
              key: "users:detail",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='users:detail'
                  title='User Details'
                  scopes={data?.scopes}
                />
              ),
            },
            {
              title: "",
              key: "users:create",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='users:create'
                  title='Create User'
                  scopes={data?.scopes}
                />
              ),
            },
            {
              title: "",
              key: "users:update",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='users:update'
                  title='Update User'
                  scopes={data?.scopes}
                />
              ),
            },
          ],
        },
        {
          title: "Manage Roles",
          key: "manageRoles",
          children: [
            {title: "View Role", key: "roles:all"},
            {
              title: "",
              key: "roles:detail",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='roles:detail'
                  title='Role Detail'
                  scopes={data?.scopes}
                />
              ),
            },
            {
              title: "",
              key: "roles:create",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='roles:create'
                  title='Create Role'
                  scopes={data?.scopes}
                />
              ),
            },
            {
              title: "",
              key: "roles:update",
              icon: ({selected}) => (
                <TreeDataIcon
                  childKey='roles:update'
                  title='Update Role'
                  scopes={data?.scopes}
                />
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

              {data.scopes && (
                <ViewModule treeData={treeData} keys={data?.scopes} />
              )}
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
        treeData={treeData}
        switcherIcon={<img src={SelectArrowDownIcon} alt='' />}
        showIcon
      />
    </div>
  );
};

const TreeDataIcon = ({childKey, selected, title, scopes}) => {
  const checkSelected = () => {
    if (Array.isArray(scopes)) {
      return scopes.some((scope) => scope === childKey);
    }
    return false;
  };

  return checkSelected() ? (
    <div className='d-flex'>
      <img src={tickIcon} alt='' className='ml-20' />
      <span className='text-nowrap f-12 ml-4-px'>{title}</span>
    </div>
  ) : (
    <span className='text-nowrap ml-40 f-12 color-gray'>{title}</span>
  );
};
