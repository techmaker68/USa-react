import { useUserContext } from "Context/USerContext";
import Login from "Pages/Auth/Login";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useUserContext();
  return (
    <>
      {isLogin() ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PrivateRoute;
