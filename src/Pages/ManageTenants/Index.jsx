import {Button, Input, Table, Select, Menu, Dropdown} from "antd";
import Layout from "Layout/Index";
import SearchIcon from "Assets/icons/saerch.svg";
import PlusIcon from "Assets/icons/plus.svg";
import FilterArrowDown from "Assets/icons/filterArrowDown.svg";
import ActionIcon from "Assets/icons/action.svg";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {UseAxios} from "Hooks/useAxios";
import {
  AccessStatus,
  AutoRenew,
  BillingType,
  RegistrationSource,
} from "Constants/Global";

const {Option} = Select;

// Render Manage Tenants Tab
const Index = () => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
    total: 10,
  });

  const [filters, setFilters] = useState({
    accessStatus: "",
    billingType: "",
  });

  // Data for Table - []
  const [dataSource, setDataSource] = useState([]);

  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/Tenants`, // setup base URL in UseAxios file.
    query: filters, // all the query strings in - {} object
    method: "get", // http request method
    deps: [filters], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // use effect
  useEffect(() => {
    // setting data - fetched from hook
    if (response !== null) {
      setDataSource(response.data);
    }
  }, [response]);

  // Table cols
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (e, row) => (
        <div>
          <p>{row?.firstName}</p>
          <p>{row?.email}</p>
        </div>
      ),
    },
    {
      title: "Bushiness Name",
      dataIndex: "businessName",
      key: "bushinessName",
    },
    {
      title: "Billing Type",
      dataIndex: "billingType",
      key: "billingType",
      render: (e, row) => <span>{BillingType[row?.billingType]}</span>,
    },
    {
      title: "Plan Name",
      dataIndex: "planName",
      key: "planName",
    },
    {
      title: "Auto Renew",
      dataIndex: "autoRenew",
      key: "autoRenew",
      render: (e, row) => <span>{AutoRenew[row?.autoRenew]}</span>,
    },
    {
      title: "Access Status",
      dataIndex: "accessStatus",
      key: "accessStatus",
      render: (e, row) => (
        <span className={`color-${AccessStatus[row?.accessStatus]} fw-500`}>
          {AccessStatus[row?.accessStatus]}
        </span>
      ),
    },
    {
      title: "Source",
      dataIndex: "registrationsSource",
      key: "registrationsSource",
      render: (e, row) => (
        <span>{RegistrationSource[row?.registrationSource]}</span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value, row) => <TableAction row={row} />,
    },
  ];

  //////////////////////////////////////////////////////// Methods
  // handle filters
  const handleFilters = (name, value) => {
    const data = {...filters};
    data[name] = value;

    setFilters(data);
  };

  return (
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper manage-tenants-wrapper'>
        <div className='d-flex justify-content-between mb-16'>
          <Input
            className='primary-search'
            prefix={<img src={SearchIcon} alt='' />}
            placeholder='Search tenants'
          />
          <Link to={"/manage-tenants/create"}>
            <Button className='primary-button'>
              <img className='button-plus-icon' src={PlusIcon} alt='' />{" "}
              Register Tenant
            </Button>
          </Link>
        </div>

        {
          // Tenants Table
        }

        <div className='primary-table'>
          {
            // table header
          }
          <div className='primary-table__header'>
            <div className='f-16 fw-700'>All Tenants (100)</div>
            {
              // filters
            }
            <ul className='list-inline'>
              {
                // Billing Type
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Billing Type :</span>
                <Select
                  dropdownMatchSelectWidth={false}
                  className='select-option-filter'
                  defaultValue={filters.billingType}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                  onChange={(value) => handleFilters("billingType", value)}
                >
                  <Option value=''>All</Option>
                  <Option value={0}>Annually</Option>
                  <Option value={1}>Monthly</Option>
                </Select>
              </li>
              {
                // Access Status
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Access Status :</span>
                <Select
                  dropdownMatchSelectWidth={false}
                  className='select-option-filter'
                  defaultValue={filters.accessStatus}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                  onChange={(value) => handleFilters("accessStatus", value)}
                >
                  <Option value=''>All</Option>
                  <Option value={true}>Active</Option>
                  <Option value={false}>Inactive</Option>
                </Select>
              </li>
            </ul>
          </div>

          <Table size='middle' dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

const TableAction = ({row}) => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link to={`/manage-tenants/${row.tenantId}/tenants-info`}>
          View Tenants
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to={`/manage-tenants/${row.tenantId}/update`}>
          Update Tenants
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2'>
        <Link to='/manage-tenants/upgrade-plan'>Upgrade Plan</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>
        <Link to=''>Reset Password</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      placement='bottomRight'
      className='cursor-pointer'
      overlay={menu}
      trigger={["click"]}
    >
      <span>
        <img className='align-middle' src={ActionIcon} alt='' />
      </span>
    </Dropdown>
  );
};
