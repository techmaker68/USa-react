import Logo from "Assets/logo.svg";
import { useState } from "react";
import Api from "Api.js";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import VisibilityIcon from "Assets/icons/visibility.svg";

import InVisibilityIcon from "Assets/icons/invisibility.svg";
import { useUserContext } from "Context/USerContext";
import { useEffect } from "react";

const Login = () => {
  const history = new useHistory();
  const [refresh, setRefresh] = useState(false);

  const { login: signin, getUser } = useUserContext();

  useEffect(() => {
    if (getUser()) {
      history.push("/products");
    }
  }, []);

  function login(values) {
    Api.post("/login", values)

      .then((response) => {
        setRefresh(!refresh);
        window.location.reload();

        signin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        {
          // logo
        }
        <img className="logo-img" src={Logo} alt="Logo" />

        <h1>Log In</h1>
        <p>Please enter your email & password to continue</p>

        <Form layout="vertical" onFinish={login}>
          <Form.Item label="Email or User Name" name="email">
            <Input
              required
              className="primary-input"
              placeholder="Enter email or username"
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password
              required
              className="primary-input"
              placeholder="Enter password"
              iconRender={(visible) =>
                visible ? (
                  <img src={VisibilityIcon} alt="" />
                ) : (
                  <img src={InVisibilityIcon} alt="" />
                )
              }
            />
          </Form.Item>

          <p>
            {" "}
            Dont have an account ?{" "}
            <span style={{ color: "#1768ac", textDecoration: "underline" }}>
              <Link to="/register"> Register Yourself</Link>
            </span>
          </p>

          <Button className="primary-button" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
