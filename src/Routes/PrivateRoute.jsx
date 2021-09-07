import {Route} from "react-router-dom";

const PrivateRoute = ({children, ...props}) => {
  return <>{true ? <Route {...props} render={() => children} /> : ""}</>;
};

export default PrivateRoute;
