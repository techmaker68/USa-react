import "./App.scss";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Index";
import ManageTenants from "./Pages/ManageTenants/Index";
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

          <PrivateRoute path='/manage-tenants' exact>
            <ManageTenants />
          </PrivateRoute>
          <PrivateRoute path='/manage-tenants/create' exact>
            <CreateTenant />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
