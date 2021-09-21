import {Input, Table, Menu, Dropdown} from "antd";
import SearchIcon from "Assets/icons/saerch.svg";
import ActionIcon from "Assets/icons/action.svg";
import {useState} from "react";
import {Link} from "react-router-dom";

// Render Manage Tenants Tab
const InvoicesHistory = () => {
  const dataSource = [
    {
      id: 0,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "-",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 1,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 2,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 3,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 4,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 5,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 6,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
    {
      id: 7,
      key: "1",
      invoiceID: "123123",
      planName: "Business",
      billingType: "Annuall",
      amount: "SAR 200",
      paymentMode: "Cash",
      paymentDate: "26 July, 2021",
      dueDate: "27 July, 2021",
      paymentStatus: "unpaid",
    },
  ];

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceID",
      key: "invoiceID",
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
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
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
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (value) => (
        <span className={`color-${value} fw-500`}>{value}</span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (value, row) => <TableAction row={row} />,
    },
  ];

  const [pagination, setPagination] = useState({currentPage: 0, total: 10});

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
          />
        </div>

        <Table size='middle' dataSource={dataSource} columns={columns} />
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
