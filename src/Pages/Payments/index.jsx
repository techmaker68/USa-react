import {Input, Table, Select, Menu, Dropdown} from "antd";
import Layout from "../../Layout/Index";
import SearchIcon from "../../Assets/icons/saerch.svg";
import FilterArrowDown from "../../Assets/icons/filterArrowDown.svg";
import Separator from "../../Assets/icons/seperator.svg";
import DateIcon from "../../Assets/icons/datepicker.svg";
import ActionIcon from "../../Assets/icons/action.svg";
import AutoRenewIcon from "../../Assets/icons/autoRenew.svg";
import {useState} from "react";
import {Link} from "react-router-dom";
import {DatePicker} from "antd";

const {Option} = Select;
const {RangePicker} = DatePicker;

// Render Manage Tenants Tab
const Index = () => {
  const dataSource = [
    {
      key: "1",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
    {
      key: "2",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "Yes",
      paymentStatus: "unPaid",
      accessStatus: "Active",
    },
    {
      key: "3",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
    {
      key: "4",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
    {
      key: "5",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
    {
      key: "6",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
    {
      key: "7",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
    {
      key: "8",
      invoiceId: "ERP - 26 July - 102",
      bushinessName: "Tashoba Industries",
      billingType: "Bank Transfer",
      amount: "100 SAR",
      paymentDate: "26 July, 2022",
      dueDate: "26 July, 2022",
      autoRenew: "yes",
      paymentStatus: "Paid",
      accessStatus: "InActive",
    },
  ];

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceId",
      key: "invoiceId",
    },
    {
      title: "Bushiness Name",
      dataIndex: "bushinessName",
      key: "bushinessName",
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
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Auto Renew",
      dataIndex: "autoRenew",
      key: "autoRenew",
      render: (value) => (
        <span>
          <img className='auto-renew-icon' src={AutoRenewIcon} alt='' />
          <span className='fw-500 text-capitalize'>{value}</span>
        </span>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (value) => (
        <span
          className={`status-${value.toLowerCase()} col-status fw-500 text-capitalize`}
        >
          {value}
        </span>
      ),
    },
    {
      title: "Access Status",
      dataIndex: "accessStatus",
      key: "accessStatus",
      render: (value) => (
        <span className={`status-${value.toLowerCase()} col-status fw-500`}>
          {value}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value) => <TableAction />,
    },
  ];

  const [pagination, setPagination] = useState({currentPage: 0, total: 10});

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
                  className='select-option-filter'
                  defaultValue={0}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                >
                  <Option value={0}>All</Option>
                </Select>
              </li>
              {
                // Billing Type
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Billing Type :</span>
                <Select
                  className='select-option-filter'
                  defaultValue={0}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                >
                  <Option value={0}>All</Option>
                </Select>
              </li>
              {
                // Access Status
              }
              <li className='list-inline-item color-gray mr-24'>
                <span className='d-inline-block mr-10'>Access Status :</span>
                <Select
                  className='select-option-filter'
                  defaultValue={0}
                  suffixIcon={
                    <img className='ml-10' src={FilterArrowDown} alt='' />
                  }
                >
                  <Option value={0}>All</Option>
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

const TableAction = () => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link href=''>View</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link href=''>Active</Link>
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
