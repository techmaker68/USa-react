import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Button} from "antd";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
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
            {title: "Create User", key: "use.create"},
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

              <ViewModule treeData={treeData} />
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

const ViewModule = ({treeData}) => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(true);
  };

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <div className='mb-15'>
      <Tree
        className='primary-tree'
        defaultExpandAll
        defaultSelectedKeys={["0-0-0"]}
        treeData={treeData}
        switcherIcon={<img src={SelectArrowDownIcon} alt='' />}
      />
    </div>
  );
};
