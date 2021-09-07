import "./App.scss";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            {
              // private routes
            }
            <PrivateRoute path=''></PrivateRoute>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
