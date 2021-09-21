import {Input, Table, Select, Menu, Dropdown} from "antd";
import Layout from "Layout/Index";
import SearchIcon from "Assets/icons/saerch.svg";
import FilterArrowDown from "Assets/icons/filterArrowDown.svg";
import Separator from "Assets/icons/seperator.svg";
import DateIcon from "Assets/icons/datepicker.svg";
import ActionIcon from "Assets/icons/action.svg";
import AutoRenewIcon from "Assets/icons/autoRenew.svg";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {DatePicker} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {AutoRenew, PaymentMethod, PaymentStatus} from "Constants/Global";
import moment from "moment";

const {Option} = Select;
const {RangePicker} = DatePicker;

// Render Manage Tenants Tab
const Index = () => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
    total: 10,
  });

  const [filters, setFilters] = useState({
    paymentStatus: "",
    billingType: "",
    paymentMethod: "",
  });

  // Data for Table - []
  const [dataSource, setDataSource] = useState([]);

  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/Payments`, // setup base URL in UseAxios file.
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
      title: "Invoice ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Bushiness Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Billing Type",
      dataIndex: "billingType",
      key: "billingType",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (e, row) => (
        <span>{moment(row?.paymentDate).format("DD MMMM, YYYY")}</span>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (e, row) => (
        <span>
          {row?.dueDate ? moment(row?.dueDate).format("DD MMMM, YYYY") : "N/A"}
        </span>
      ),
    },
    {
      title: "Auto Renew",
      dataIndex: "autoRenew",
      key: "autoRenew",
      render: (value) => (
        <span>
          <img className='auto-renew-icon' src={AutoRenewIcon} alt='' />
          <span className='fw-500 text-capitalize'>{AutoRenew[value]}</span>
        </span>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (value) => (
        <span
          className={`status-${PaymentStatus[value]} col-status fw-500 text-capitalize`}
        >
          {PaymentStatus[value]}
        </span>
      ),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (value) => (
        <span className={`status-${PaymentMethod[value]} col-status fw-500`}>
          {PaymentMethod[value]}
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

  //////////////////////////////////////////////////////// Methods
  // handle filters
  const handleFilters = (name, value) => {
    const data = {...filters};
    data[name] = value;

    setFilters(data);
  };

  return (
    <Layout title='Manage Tenants' currentPage={1}>
      <div className='main-wrapper manage-tenants-wrapper'>
        <div className='d-flex justify-content-between mb-16'>
          <Input
            className='primary-search'
            prefix={<img src={SearchIcon} alt='' />}
            placeholder='Business Name or Invoice ID'
          />
          <RangePicker
            className='primary-range-picker'
            separator={<img width={70} src={Separator} alt='' />}
            suffixIcon={<img src={DateIcon} alt='' />}
            clearIcon={false}
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
            <div className='f-16 fw-700'>All Payments (100)</div>
            {
              // filters
            }
            <ul className='list-inline'>
              {
                // payment status
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Payment Status :</span>
                <Select
                  dropdownMatchSelectWidth={false}
                  className='select-option-filter'
                  defaultValue={filters.paymentStatus}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                  onChange={(value) => handleFilters("paymentStatus", value)}
                >
                  <Option value=''>All</Option>
                  <Option value={0}>Unpaid</Option>
                  <Option value={1}>Paid</Option>
                </Select>
              </li>
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
                // Payment Method
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Payment Method :</span>
                <Select
                  dropdownMatchSelectWidth={false}
                  className='select-option-filter'
                  defaultValue={filters.paymentMethod}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                  onChange={(value) => handleFilters("paymentMethod", value)}
                >
                  <Option value=''>All</Option>
                  <Option value={0}>Cash</Option>
                  <Option value={1}>Check</Option>
                  <Option value={2}>Bank Transfer</Option>
                  <Option value={3}>Credit Card</Option>
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

// render table action dropdown menu
const TableAction = ({row}) => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link to={`/payments/${row.id}`}>View</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to=''>Active</Link>
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
