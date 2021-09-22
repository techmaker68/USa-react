import {Button, Table, Menu, Dropdown} from "antd";
import PlusIcon from "Assets/icons/plus.svg";
import ActionIcon from "Assets/icons/action.svg";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {UseAxios} from "Hooks/useAxios";

// Render Manage Tenants Tab
const ManageRoles = () => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
    total: 10,
  });

  const [filters, setFilters] = useState({
    paymentStatus: "",
    billingType: "",
    paymentMethod: "",
    search: "",
  });

  // Data for Table - []
  const [dataSource, setDataSource] = useState([]);

  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/roles`, // setup base URL in UseAxios file.
    query: filters, // all the query strings in - {} object
    method: "get", // http request method
    deps: [filters], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // use effect
  useEffect(() => {
    // setting data - fetched from hook
    if (response !== null) {
      setDataSource(response);
    }
  }, [response]);

  // Table cols

  const columns = [
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
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
      render: (value, row) => <TableAction row={row} />,
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
          rowKey='id'
        />
      </div>
    </div>
  );
};

export default ManageRoles;

const TableAction = ({row}) => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link to={`/users-management/view-role/${row.id}`}>View Role</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to={`/users-management/update-role/${row.id}`}>Update Role</Link>
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
