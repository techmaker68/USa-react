import {Route} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <>
      {true ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        ""
      )}
    </>
  );
};

export default PrivateRoute;
