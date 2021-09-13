import {Tabs} from "antd";
import Layout from "Layout/Index";
import {useState} from "react";
import ManageUsers from "Components/UsersManagement/ManageUsers/ManageUsers";
import ManageRoles from "Components/UsersManagement/ManageRoles/ManageRoles";
import {useHistory} from "react-router";

const {TabPane} = Tabs;

// Render Manage Tenants Tab
const Index = () => {
  const [currentTab, setCurrentTab] = useState(
    window.location.pathname.split("/")[2]
  );

  console.log("currentTab", currentTab);

  let history = useHistory();
  const handleTabChange = (tab) => {
    history.push(`/users-management/${tab}`);
    setCurrentTab(tab);
  };

  return (
    <Layout title='User Management' currentPage={4}>
      <div className='main-wrapper'>
        <Tabs
          className='primary-tabs'
          defaultActiveKey={currentTab}
          onChange={handleTabChange}
        >
          <TabPane tab='Manage Users' key='manage-users'>
            <ManageUsers />
          </TabPane>
          <TabPane tab='Manage Roles' key='manage-roles'>
            <ManageRoles />
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
