import {Input, Table, Select, Menu, Dropdown} from "antd";
import Layout from "../../Layout/Index";
import SearchIcon from "../../Assets/icons/saerch.svg";
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
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Approved",
    },
    {
      key: "2",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Declined",
    },
    {
      key: "3",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Pending",
    },
    {
      key: "4",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Approved",
    },
    {
      key: "5",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Approved",
    },
    {
      key: "6",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Approved",
    },
    {
      key: "7",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Approved",
    },
    {
      key: "8",
      fullName: "Muzamil Afridi",
      email: "muzamil@gmail.com",
      phoneNumber: "+ 92 346 1728 826",
      country: "Saudi Arabia",
      company: "Teshwa Tech",
      noOfUsers: "10",
      requestDate: "20 July, 2021",
      status: "Approved",
    },
  ];

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
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "No. of Users",
      dataIndex: "noOfUsers",
      key: "noOfUsers",
    },
    {
      title: "Request Date",
      dataIndex: "requestDate",
      key: "requestDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => (
        <span className={`status-${value.toLowerCase()} fw-500 col-status`}>
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
    <Layout title='Demo Requests' currentPage={3}>
      <div className='main-wrapper manage-tenants-wrapper'>
        <div className='mb-16'>
          <Input
            className='primary-search'
            prefix={<img src={SearchIcon} alt='' />}
            placeholder='Search tenants'
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
        <Link href=''>Approve</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link href=''>Decline</Link>
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
