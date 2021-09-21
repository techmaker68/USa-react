import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Tabs} from "antd";
import {useState} from "react";
import {useHistory} from "react-router";
import TenantInfo from "Components/ManageTenants/TenantInfo";
import {useParams} from "react-router-dom";
import InvoicesHistory from "Components/ManageTenants/InvoicesHistory";

const {TabPane} = Tabs;

const View = () => {
  const {id} = useParams();

  // get current tab state on reload
  const [currentTab, setCurrentTab] = useState(
    window.location.pathname.split("/")[3]
  );

  // handle tabs url
  let history = useHistory();

  const handleTabChange = (tab) => {
    history.push(`/manage-tenants/${id}/${tab}`);
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
            <TenantInfo tenantID={id} />
          </TabPane>
          <TabPane tab='Invoices History' key='invoices-history'>
            <InvoicesHistory tenantID={id} />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default View;
