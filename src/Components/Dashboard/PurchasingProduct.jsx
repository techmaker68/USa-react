import {Table} from "antd";

const PurchasingProduct = () => {
  const dataSource = [
    {
      id: 0,
      key: 0,
      cityName: "Riyadh",
      customers: 10,
      revenue: "1000 SAR",
    },
    {
      id: 1,
      key: 1,
      cityName: "Riyadh",
      customers: 10,
      revenue: "1000 SAR",
    },
    {
      id: 2,
      key: 2,
      cityName: "Riyadh",
      customers: 10,
      revenue: "1000 SAR",
    },
    {
      id: 3,
      key: 3,
      cityName: "Riyadh",
      customers: 10,
      revenue: "1000 SAR",
    },
    {
      id: 4,
      key: 4,
      cityName: "Riyadh",
      customers: 10,
      revenue: "1000 SAR",
    },
  ];

  const columns = [
    {
      title: "City Name",
      dataIndex: "cityName",
      key: "cityName",
    },
    {
      title: "customers",
      dataIndex: "customers",
      key: "customers",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
  ];

  return (
    <>
      <div className='cities-wrapper__header'>
        List Of Cities Purchasing Product
      </div>

      <div className='primary-table'>
        <Table
          pagination={false}
          size='middle'
          dataSource={dataSource}
          columns={columns}
          scroll={{y: 165}}
        />
      </div>
    </>
  );
};

export default PurchasingProduct;
