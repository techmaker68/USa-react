import React, { useState, useEffect } from "react";
import Logo from "Assets/logo.svg";
import Api from "Api.js";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Select, message } from "antd";
import VisibilityIcon from "Assets/icons/visibility.svg";
import InVisibilityIcon from "Assets/icons/invisibility.svg";
import { useUserContext } from "Context/USerContext";
function Register(props) {
  const { login: signin, getUser } = useUserContext();
  const history = new useHistory();
  const [refresh, setRefresh] = useState(false);
  const { Option } = Select;

  function RegisterUser(values) {
    Api.post("/register", values)

      .then((response) => {
        setRefresh(!refresh);
        history.push("/");

        signin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-register-container">
          {
            // logo
          }
          <img className="logo-img" src={Logo} alt="Logo" />

          <h1>Sign up</h1>
          <p>Please enter your email & password to continue</p>

          <Form layout="vertical" onFinish={RegisterUser}>
            <Form.Item label="Name" name="name">
              <Input className="primary-input" placeholder="Enter Name " />
            </Form.Item>
            <Form.Item label="Email or User Name" name="email">
              <Input className="primary-input" placeholder="Enter email " />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password
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

            <div>
              <Form.Item label="Enter your Role" name="role">
                <Select className="primary-select" placeholder="select one">
                  <Option value="1">User</Option>
                  <Option value="2">Admin</Option>
                </Select>
              </Form.Item>
            </div>
            <Button className="primary-button" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
