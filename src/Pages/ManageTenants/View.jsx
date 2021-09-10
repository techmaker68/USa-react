import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Tabs} from "antd";
import {useState} from "react";
import {useHistory} from "react-router";
import TenantInfo from "Components/ManageTenants/TenantInfo";
import InvoicesHistory from "Components/ManageTenants/InvoicesHistory";

const {TabPane} = Tabs;

const View = () => {
  // dummy data
  const data = {
    id: 0,
    key: "8",
    fullName: "Muzamil Afridi",
    email: "muzamil@gmail.com",
    phoneNumber: "+ 92 346 1728 826",
    country: "Saudi Arabia",
    company: "Teshwa Tech",
    noOfUsers: "10",
    requestDate: "20 July, 2021",
    status: "Approved",
  };

  const [currentTab, setCurrentTab] = useState(
    window.location.pathname.split("/")[3]
  );

  let history = useHistory();
  const handleTabChange = (tab) => {
    history.push(`/manage-tenants/${data.id}/${tab}`);
    setCurrentTab(tab);
  };

  return (
    <Layout title='User Management' currentPage={2}>
      <div className='main-wrapper manage-tenants-view'>
        {
          // breadcrumbs
        }
        <Link to='/manage-tenants' className='breadcrumb'>
          <img src={ArrowBack} alt='' /> <span>Back</span>
        </Link>
        <Tabs
          className='primary-tabs'
          defaultActiveKey={currentTab}
          onChange={handleTabChange}
        >
          <TabPane tab='Tenants Information' key='tenants-info'>
            <TenantInfo />
          </TabPane>
          <TabPane tab='Invoices History' key='invoices-history'>
            <InvoicesHistory />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default View;
