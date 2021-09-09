import "./App.scss";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Index";
import Payments from "./Pages/Payments/Index";
import ManageTenants from "./Pages/ManageTenants/Index";
import DemoRequests from "./Pages/DemoRequests/Index";
import UserManagement from "./Pages/UsersManagement/Index";
import CreateTenant from "./Pages/ManageTenants/Create";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {
            // private routes
          }
          <PrivateRoute path='/dashboard' exact>
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path='/payments' exact>
            <Payments />
          </PrivateRoute>

          <PrivateRoute path='/manage-tenants' exact>
            <ManageTenants />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/create' exact>
            <CreateTenant />
          </PrivateRoute>

          <PrivateRoute path='/demo-requests' exact>
            <DemoRequests />
          </PrivateRoute>

          <PrivateRoute path='/users-management/manage-users' exact>
            <UserManagement />
          </PrivateRoute>
          <PrivateRoute path='/users-management/manage-roles' exact>
            <UserManagement />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
