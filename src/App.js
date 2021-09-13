import "./App.scss";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Index";
import Payments from "./Pages/Payments/Index";
import ViewPayments from "./Pages/Payments/View";
import ManageTenants from "./Pages/ManageTenants/Index";
import ManageTenantsView from "./Pages/ManageTenants/View";
import DemoRequests from "./Pages/DemoRequests/Index";
import UserManagement from "./Pages/UsersManagement/Index";
import CreateTenant from "./Pages/ManageTenants/Create";
import ViewDemoRequest from "./Pages/DemoRequests/View";
import UpdateTenant from "./Components/ManageTenants/UpdateTenant";
import UpgradePlan from "./Pages/ManageTenants/Upgrade";
import CreateRole from "./Components/UsersManagement/ManageRoles/CreateRole";
import UpdateRole from "./Components/UsersManagement/ManageRoles/UpdateRole";
import ViewRole from "./Components/UsersManagement/ManageRoles/ViewRole";
import BusinessInfo from "./Pages/BusinessInformation/Index";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {
            // Dashboard
          }
          <PrivateRoute path='/dashboard' exact>
            <Dashboard />
          </PrivateRoute>
          {
            // Payments
          }
          <PrivateRoute path='/payments' exact>
            <Payments />
          </PrivateRoute>
          <PrivateRoute path='/payments/:id' exact>
            <ViewPayments />
          </PrivateRoute>
          {
            // Manage Tenants
          }
          <PrivateRoute path='/manage-tenants' exact>
            <ManageTenants />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/:id/tenants-info' exact>
            <ManageTenantsView />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/:id/invoices-history' exact>
            <ManageTenantsView />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/create' exact>
            <CreateTenant />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/:id/update' exact>
            <UpdateTenant />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/upgrade-plan' exact>
            <UpgradePlan />
          </PrivateRoute>
          {
            // Demo Requests
          }
          <PrivateRoute path='/demo-requests' exact>
            <DemoRequests />
          </PrivateRoute>
          <PrivateRoute path='/demo-requests/:id' exact>
            <ViewDemoRequest />
          </PrivateRoute>
          {
            // User Management
          }
          <PrivateRoute path='/users-management/manage-users' exact>
            <UserManagement />
          </PrivateRoute>
          <PrivateRoute path='/users-management/manage-roles' exact>
            <UserManagement />
          </PrivateRoute>
          <PrivateRoute path='/users-management/create-role' exact>
            <CreateRole />
          </PrivateRoute>
          <PrivateRoute path='/users-management/update-role' exact>
            <UpdateRole />
          </PrivateRoute>
          <PrivateRoute path='/users-management/view-role' exact>
            <ViewRole />
          </PrivateRoute>

          {
            // User info
          }
          <PrivateRoute path='/business-info' exact>
            <BusinessInfo />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
