import {Input, Table, Menu, Dropdown} from "antd";
import SearchIcon from "Assets/icons/saerch.svg";
import ActionIcon from "Assets/icons/action.svg";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {UseAxios} from "Hooks/useAxios";
import {useParams} from "react-router-dom";
import {PaymentMethod, PaymentStatus} from "Constants/Global";
import {BillingType} from "./../../Constants/Global";
import moment from "moment";
import {handleAntdTablePagination} from "./../../Utilities/HandlePagination";

// Render Manage Tenants Tab
const InvoicesHistory = () => {
  const {id} = useParams();
  const [pagination, setPagination] = useState({
    pageSize: 10,
    current: 1,
    total: 50,
  });

  const [filters, setFilters] = useState({
    search: "",
  });

  // Data for Table - []
  const [dataSource, setDataSource] = useState([]);

  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/Tenants/${id}/payments`, // setup base URL in UseAxios file.
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

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "displayId",
      key: "displayId",
    },
    {
      title: "Plan Name",
      dataIndex: "planName",
      key: "planName",
    },
    {
      title: "Billing Type",
      dataIndex: "billingType",
      key: "billingType",
      render: (value) => <span>{BillingType[value]}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment Mode",
      dataIndex: "billingType",
      key: "billingType",
      render: (value) => <span>{PaymentMethod[value]}</span>,
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (value) => (
        <span>{value ? moment(value).format("DD MMMM, YYYY") : "-"}</span>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (value) => (
        <span>{value ? moment(value).format("DD MMMM, YYYY") : "-"}</span>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (value) => (
        <span className={`color-${PaymentStatus[value]} fw-500`}>
          {PaymentStatus[value]}
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

  ////////////////////////////////////////// Methods
  const handleSearch = ({target}) => {
    setFilters({search: target.value});
  };

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
    <div className='view-page manage-tenants-wrapper'>
      {
        // Tenants Table
      }

      <div className='primary-table'>
        {
          // table header
        }
        <div className='primary-table__header'>
          <div className='f-16 fw-700'>All Invoices (100)</div>
          <Input
            className='primary-search'
            prefix={<img src={SearchIcon} alt='' />}
            placeholder='Search Invoices ID'
            onChange={handleSearch}
          />
        </div>

        <Table
          size='middle'
          dataSource={dataSource}
          columns={columns}
          pagination={{
            showSizeChanger: false,
            ...pagination,
          }}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default InvoicesHistory;

const TableAction = ({row}) => {
  const menu = (
    <Menu className='primary-table-action-menu'>
      <Menu.Item key='0'>
        <Link to={`/manage-tenants/${row.id}/tenants-info`}>View</Link>
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
