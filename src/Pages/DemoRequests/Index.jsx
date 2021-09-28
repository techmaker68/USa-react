import {Input, Table, Select, Menu, Dropdown} from "antd";
import Layout from "Layout/Index";
import SearchIcon from "Assets/icons/saerch.svg";
import FilterArrowDown from "Assets/icons/filterArrowDown.svg";
import ActionIcon from "Assets/icons/action.svg";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {UseAxios} from "Hooks/useAxios";
import moment from "moment";
import {handleAntdTablePagination} from "../../Utilities/HandlePagination";
import {DemoRequestStatus} from "Constants/Global";

const {Option} = Select;

// Render Manage Tenants Tab
const Index = () => {
  const [pagination, setPagination] = useState({
    pageSize: 10,
    current: 1,
    total: 50,
  });

  const [filters, setFilters] = useState({
    requestStatus: "",
    search: "",
  });

  // Data for Table - []
  const [dataSource, setDataSource] = useState([]);

  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/demo`, // setup base URL in UseAxios file.
    query: {
      ...filters,
      current: pagination.current,
      pageSize: pagination.pageSize,
    }, // all the query strings in - {} object
    method: "get", // http request method
    deps: [filters], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // use effect
  useEffect(() => {
    // setting data - fetched from hook
    if (response !== null) {
      setPagination({...pagination, total: response?.totalRecords});
      setDataSource(response.data);
    }
  }, [response]);

  // Table cols

  //////////////////////////////////////////////////////// Methods
  // handle filters
  const handleFilters = (name, value) => {
    const data = {...filters};
    data[name] = value;

    setFilters(data);
  };

  // handle input search
  const handleSearch = ({target}) => {
    setFilters({...filters, search: target.value});
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "No. of Users",
      dataIndex: "numberOfUsers",
      key: "numberOfUsers",
    },
    {
      title: "Request Date",
      dataIndex: "requestDate",
      key: "requestDate",
      render: (value) =>
        value ? moment(value).format("DD MMMM, YYYY") : "N/A",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => (
        <span className={`status-${value} fw-500 col-status`}>
          {DemoRequestStatus[value]}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value, row) => <TableAction row={row} />,
    },
  ];

  // handle pagination
  const handleTableChange = (pagination) => {
    let queryFilters = {
      ...filters,
      current: pagination.current,
      pageSize: pagination.pageSize,
    };
    const apiEndPoint = "/demo";

    handleAntdTablePagination(
      apiEndPoint,
      queryFilters,
      setDataSource,
      setPagination,
      pagination
    );
  };

  return (
    <Layout title='Demo Requests' currentPage={3}>
      <div className='main-wrapper manage-tenants-wrapper'>
        <div className='mb-16'>
          <Input
            className='primary-search'
            prefix={<img src={SearchIcon} alt='' />}
            placeholder='Search tenants'
            onChange={handleSearch}
          />
        </div>

        {
          // Tenants Table
        }

        <div className='primary-table'>
          {
            // table header
          }
          <div className='primary-table__header'>
            <div className='f-16 fw-700'>Demo Requests (20)</div>
            {
              // filters
            }
            <ul className='list-inline'>
              {
                // Request status
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Request Status :</span>
                <Select
                  dropdownMatchSelectWidth={false}
                  className='select-option-filter'
                  defaultValue={filters.requestStatus}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                  onChange={(value) => handleFilters("requestStatus", value)}
                >
                  <Option value=''>All</Option>
                  <Option value={1}>Approve</Option>
                  <Option value={0}>Decline</Option>
                </Select>
              </li>
            </ul>
          </div>

          <Table
            size='middle'
            dataSource={dataSource}
            columns={columns}
            rowKey='id'
            pagination={{
              showSizeChanger: false,
              ...pagination,
            }}
            onChange={handleTableChange}
          />
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
        <Link to={`/demo-requests/${row.id}`}>View</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to=''>Approve</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2'>
        <Link to=''>Decline</Link>
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
