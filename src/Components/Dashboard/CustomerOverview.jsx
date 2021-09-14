import SelectArrowDownIcon from "Assets/icons/arrowDownBlue.svg";
import {Select, Table} from "antd";

const {Option} = Select;

const CustomerOverview = () => {
  const dataSource = [
    {
      id: 0,
      key: 0,
      name: "Tashoba Industries",
      users: 10,
      invoiceCount: 5,
      amount: "1000 SAR",
    },
    {
      id: 1,
      key: 1,
      name: "Tashoba Industries",
      users: 10,
      invoiceCount: 5,
      amount: "1000 SAR",
    },
    {
      id: 2,
      key: 2,
      name: "Tashoba Industries",
      users: 10,
      invoiceCount: 5,
      amount: "1000 SAR",
    },
    {
      id: 3,
      key: 3,
      name: "Tashoba Industries",
      users: 10,
      invoiceCount: 5,
      amount: "1000 SAR",
    },
    {
      id: 4,
      key: 4,
      name: "Tashoba Industries",
      users: 10,
      invoiceCount: 5,
      amount: "1000 SAR",
    },
  ];

  const columns = [
    {
      title: "Business / Customer Name",
      dataIndex: "name",
      key: "name",
      width: "40%",
    },
    {
      title: "users",
      dataIndex: "users",
      key: "users",
      width: "15%",
    },
    {
      title: "Invoice Count",
      dataIndex: "invoiceCount",
      width: "25%",
      key: "invoiceCount",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "20%",
      key: "amount",
    },
  ];

  return (
    <>
      <div className='customer-overview__header'>
        <h1>Top 5 Customers Overview</h1>
        <div>
          <Select
            defaultValue={0}
            className='dashboard-select-option'
            suffixIcon={
              <img
                className='select-down-icon'
                src={SelectArrowDownIcon}
                alt=''
              />
            }
          >
            <Option value={0}>Paid</Option>
          </Select>
        </div>
      </div>
      <div className='primary-table'>
        <Table
          pagination={false}
          size='middle'
          dataSource={dataSource}
          columns={columns}
          scroll={{y: 154}}
        />
      </div>
    </>
  );
};

export default CustomerOverview;
