import {Button, Table, Menu, Dropdown} from "antd";
import PlusIcon from "../../Assets/icons/plus.svg";
import ActionIcon from "../../Assets/icons/action.svg";
import {useState} from "react";
import {Link} from "react-router-dom";

// Render Manage Tenants Tab
const Index = () => {
  const dataSource = [
    {
      key: "1",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
    {
      key: "2",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "InActive",
      createdDate: "20 July, 2021",
    },
    {
      key: "3",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
    {
      key: "4",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
    {
      key: "5",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
    {
      key: "6",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
    {
      key: "7",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
    {
      key: "8",
      fullName: "Muzamil Afridi",
      userName: "Muzzikhan926",
      email: "muzamil@erp.com",
      role: "Support",
      gender: "Male",
      status: "Active",
      createdDate: "20 July, 2021",
    },
  ];

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => (
        <span className={`status-${value.toLowerCase()} col-status fw-500`}>
          {value}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value) => <TableAction />,
    },
  ];

  return (
    <div className='manage-tenants-wrapper'>
      {
        // Tenants Table
      }

      <div className='primary-table'>
        {
          // table header
        }
        <div className='primary-table__header'>
          <div className='f-16 fw-700'>Users (10)</div>
          <Link to=''>
            <Button className='primary-button'>
              <img className='button-plus-icon' src={PlusIcon} alt='' /> Create
              User
            </Button>
          </Link>
        </div>

        <Table size='middle' dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Index;

const TableAction = () => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link to=''>Update</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to=''>In Active</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to=''>Reset</Link>
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
