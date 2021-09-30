import {Button, Table, Menu, Dropdown} from "antd";
import PlusIcon from "Assets/icons/plus.svg";
import ActionIcon from "Assets/icons/action.svg";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import UserModal from "./UserModal";
import {UseAxios} from "Hooks/useAxios";
import {Gender} from "./../../../Constants/Global";
import {AccessStatus} from "Constants/Global";
import moment from "moment";
import {handleAntdTablePagination} from "./../../../Utilities/HandlePagination";

// Render Manage Tenants Tab
const ManageUsers = () => {
  const [isCreateUserModal, setIsCreateUserModal] = useState(false);

  const handleCreateUser = () => {
    setIsCreateUserModal(true);
  };
  const [pagination, setPagination] = useState({
    pageSize: 10,
    current: 1,
    total: 50,
  });

  const [filters, setFilters] = useState({
    refresh: false,
  });

  // Data for Table - []
  const [dataSource, setDataSource] = useState([]);

  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/users`, // setup base URL in UseAxios file.
    query: {
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
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (value) => Gender[value] ?? "-",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (value) => (
        <span className={`status-${AccessStatus[value]} col-status fw-500`}>
          {AccessStatus[value]}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (value) =>
        value ? moment(value).format("DDDD MM, YYYY") : "N/A",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value, row) => (
        <TableAction setFilters={setFilters} filters={filters} row={row} />
      ),
    },
  ];

  // handle pagination
  const handleTableChange = (pagination) => {
    let queryFilters = {
      ...filters,
      current: pagination.current,
      pageSize: pagination.pageSize,
    };
    const apiEndPoint = "/payments";

    handleAntdTablePagination(
      apiEndPoint,
      queryFilters,
      setDataSource,
      setPagination,
      pagination
    );
  };

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
          <div className='f-16 fw-700'>
            Users{" "}
            {Array.isArray(response.data) ? `(${response.data.length})` : ""}
          </div>

          <Button onClick={handleCreateUser} className='primary-button'>
            <img className='button-plus-icon' src={PlusIcon} alt='' /> Create
            User
          </Button>
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
      {isCreateUserModal && (
        <UserModal
          isModalVisible={isCreateUserModal}
          setIsModalVisible={setIsCreateUserModal}
          requestDetail={{apiEndPoint: "/users", method: "post"}}
          primaryButtonTitle='Create'
          setFilters={setFilters}
          filters={filters}
        />
      )}
      {/* {isUpdateUserModal && (
        
      )} */}
    </div>
  );
};

export default ManageUsers;

const TableAction = ({row, setFilters, filters}) => {
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false);

  const handleUpdateUser = () => {
    setIsUpdateUserModal(true);
  };

  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <div className='cursor-pointer' onClick={handleUpdateUser}>
          Update
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='1'>
        <Link to=''>In Active</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2'>
        <Link to=''>Reset</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
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

      {isUpdateUserModal && (
        <UserModal
          isModalVisible={isUpdateUserModal}
          setIsModalVisible={setIsUpdateUserModal}
          requestDetail={{apiEndPoint: `/users/${row.id}`, method: "put"}}
          primaryButtonTitle='Update'
          data={row}
          setFilters={setFilters}
          filters={filters}
        />
      )}
    </>
  );
};
