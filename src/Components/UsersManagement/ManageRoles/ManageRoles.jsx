import {Button, Table, Menu, Dropdown} from "antd";
import PlusIcon from "Assets/icons/plus.svg";
import ActionIcon from "Assets/icons/action.svg";
import {Link} from "react-router-dom";

// Render Manage Tenants Tab
const ManageRoles = () => {
  const dataSource = [
    {
      id: 0,
      key: "1",
      roleName: "Support Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 1,
      key: "2",
      roleName: "Support Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  const columns = [
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
          <div className='f-16 fw-700'>Roles (02)</div>
          <Link to='/users-management/create-role'>
            <Button className='primary-button'>
              <img className='button-plus-icon' src={PlusIcon} alt='' /> Create
              Role
            </Button>
          </Link>
        </div>
        <Table
          pagination={false}
          size='middle'
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default ManageRoles;

const TableAction = () => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link to='/users-management/view-role'>View Role</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to='/users-management/update-role'>Update Role</Link>
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
