import {Tabs} from "antd";
import Layout from "Layout/Index";
import {useState} from "react";
import GeneralSettings from "Components/AdminSettings/GeneralSettings/index";
import AllPlans from "Components/AdminSettings/AllPlans/index";
import {useHistory} from "react-router";

const {TabPane} = Tabs;
// Render Settings Tabs
const Index = () => {
  const [currentTab, setCurrentTab] = useState(
    window.location.pathname.split("/")[2]
  );

  let history = useHistory();
  const handleTabChange = (tab) => {
    history.push(`/settings/${tab}`);
    setCurrentTab(tab);
  };

  return (
    <Layout currentPage={5} title='User Management'>
      <div className='main-wrapper'>
        <Tabs
          className='primary-tabs'
          defaultActiveKey={currentTab}
          onChange={handleTabChange}
        >
          <TabPane tab='General Settings' key='general-settings'>
            <GeneralSettings />
          </TabPane>
          <TabPane tab='All Plans' key='all-plans'>
            <AllPlans />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
