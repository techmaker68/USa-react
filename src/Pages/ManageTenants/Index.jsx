import {Button, Input, Table, Select, Menu, Dropdown} from "antd";
import Layout from "../../Layout/Index";
import SearchIcon from "../../Assets/icons/saerch.svg";
import PlusIcon from "../../Assets/icons/plus.svg";
import FilterArrowDown from "../../Assets/icons/filterArrowDown.svg";
import ActionIcon from "../../Assets/icons/action.svg";
import {useState} from "react";
import {Link} from "react-router-dom";

const {Option} = Select;

// Render Manage Tenants Tab
const Index = () => {
  const dataSource = [
    {
      key: "1",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
    {
      key: "2",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
    {
      key: "3",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
    {
      key: "4",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
    {
      key: "5",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
    {
      key: "6",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
    {
      key: "7",
      fullName: "Muzamil Afridi",
      bushinessName: "Teshwa Tech",
      billingType: "Bank Transfer",
      planName: "Business",
      paymentStatus: "Month",
      autoRenew: "On",
      accessStatus: "Active",
      source: "Website",
    },
  ];

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: () => (
        <div>
          <p>Muzamil Afridi</p>
          <p>muzamil@gmail.com</p>
        </div>
      ),
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
      title: "Plan Name",
      dataIndex: "planName",
      key: "planName",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
    {
      title: "Auto Renew",
      dataIndex: "autoRenew",
      key: "autoRenew",
    },
    {
      title: "Access Status",
      dataIndex: "accessStatus",
      key: "accessStatus",
      render: (value) => (
        <span className={`color-${value} fw-500`}>{value}</span>
      ),
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
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
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper manage-tenants-wrapper'>
        <div className='d-flex justify-content-between mb-16'>
          <Input
            className='primary-search'
            prefix={<img src={SearchIcon} alt='' />}
            placeholder='Search tenants'
          />
          <Button className='primary-button'>
            <img className='button-plus-icon' src={PlusIcon} alt='' /> Register
            Tenant
          </Button>
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
        <Link href=''>Update</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link href=''>Reset Password</Link>
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
