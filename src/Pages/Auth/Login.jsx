import Logo from "Assets/logo.svg";
import {Form, Input, Button} from "antd";
import VisibilityIcon from "Assets/icons/visibility.svg";
import InVisibilityIcon from "Assets/icons/invisibility.svg";

const Login = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-container'>
        {
          // logo
        }
        <img className='logo-img' src={Logo} alt='Logo' />

        <h1>Log In</h1>
        <p>Please enter your email & password to continue</p>

        <Form layout='vertical'>
          <Form.Item label='Email or User Name'>
            <Input
              className='primary-input'
              placeholder='Enter email or username'
            />
          </Form.Item>
          <Form.Item label='Password'>
            <Input.Password
              className='primary-input'
              placeholder='Enter password'
              iconRender={(visible) =>
                visible ? (
                  <img src={VisibilityIcon} alt='' />
                ) : (
                  <img src={InVisibilityIcon} alt='' />
                )
              }
            />
          </Form.Item>

          <Button className='primary-button'>Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
