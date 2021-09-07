import "./App.scss";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Index";

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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
