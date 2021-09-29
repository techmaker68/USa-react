import Layout from "Layout/Index";
import {Form, Input, Switch, InputNumber, Button, Card, message} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import PhoneInput from "react-phone-input-2";
import CountryComponent from "Components/Common/CountryComponent";
import CitySelect from "Components/Common/CitySelect";
import StateSelect from "Components/Common/StateSelect";
import {UseAxios} from "Hooks/useAxios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import Http from "Http";
import {Rules} from "Constants/Global";

const UpdateTenant = () => {
  const {id} = useParams();
  const [phoneNumber, setPhoneNumber] = useState("");

  // Fetch Data - http request
  const {
    response: data,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/Tenants/${id}`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  useEffect(() => {
    if (data !== null) setPhoneNumber(data?.phoneNumber);
  }, [data]);

  // phone change
  const handlePhoneChange = (value) => {
    if (value === "") {
      setPhoneNumber(null);
    } else setPhoneNumber(value);
  };

  const history = useHistory();

  // handle create tenant
  const handleUpdateTenant = (values) => {
    if (!phoneNumber) {
      message.error(`Form submission failed.`);
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("businessName", values.businessName);
    formData.append("numberOfBranches", values.numberOfBranches);
    formData.append("numberOfUsers", values.numberOfUsers);
    formData.append("position", values.position);
    formData.append("country", values.country);
    formData.append("address", values.address);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("postalCode", values.postalCode);
    formData.append("accessAllowed", values.accessAllowed);
    formData.append("autoRenew", values.autoRenew);

    Http.put(`/tenants/${id}`, formData)
      .then((res) => {
        history.push("/manage-tenants");
        message.success("Tenant Created Successfully");
      })
      .catch((err) => console.log("err", err));
  };

  const handleFinishFailed = ({errorFields}) => {
    if (errorFields.length > 0) {
      message.error(`Form submission failed.`);
    }
  };
  return (
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper'>
        <div className='page-card  update-tenant'>
          <Card bordered={false} loading={isLoading}>
            <Form
              layout='vertical'
              initialValues={{...data, phone: phoneNumber}}
              onFinish={handleUpdateTenant}
              onFinishFailed={handleFinishFailed}
            >
              <div className='page-card-header d-flex justify-content-between align-item-center'>
                {
                  // breadcrumbs
                }
                <Link
                  to={`/manage-tenants/${id}/tenants-info`}
                  className='breadcrumb'
                >
                  <img src={ArrowBack} alt='' />
                  <span className='mt-0'>Update Tenant</span>
                </Link>
                <div>
                  <Form.Item
                    name='accessAllowed'
                    className='d-inline-block m-0 p-0'
                    valuePropName='checked'
                  >
                    <Switch className='primary-switch mr-7 mb-7' />
                  </Form.Item>
                  <span className='f-16 fw-600 color-apple align-middle mr-30'>
                    Active
                  </span>
                  <Form.Item
                    name='autoRenew'
                    className='d-inline-block m-0 p-0'
                    valuePropName='checked'
                  >
                    <Switch className='primary-switch mr-7 mb-7' />
                  </Form.Item>

                  <span className='f-16 fw-600 color-apple align-middle'>
                    Auto Renew
                  </span>
                </div>
              </div>
              <div className='page-card__content'>
                {/*Personal Details*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Personal Information</p>
                  <hr className='mt-1' />
                  <div className='mx-49'>
                    <div className='d-flex gap-24'>
                      <div>
                        <Form.Item
                          label='First Name'
                          name='firstName'
                          rules={Rules.Name}
                        >
                          <Input className='primary-input' />
                        </Form.Item>
                        <Form.Item label='Phone Number'>
                          <PhoneInput
                            placeholder='Enter phone number'
                            containerClass='primary-input-phone'
                            onChange={handlePhoneChange}
                            masks={{sa: "... ... ..."}}
                            value={phoneNumber}
                          />
                          <p
                            className={phoneNumber ? "d-none" : "error-message"}
                          >
                            Field is required.
                          </p>
                        </Form.Item>
                      </div>

                      <Form.Item
                        label='Last Name'
                        name='lastName'
                        rules={Rules.Name}
                      >
                        <Input className='primary-input' />
                      </Form.Item>

                      <Form.Item label='Email' name='email' rules={Rules.Email}>
                        <Input className='primary-input' />
                      </Form.Item>
                    </div>
                  </div>
                </section>
                {/*Business Details*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Business Detail</p>
                  <hr className='mt-1' />
                  <div className='mx-49'>
                    <div className='d-flex gap-24'>
                      <div>
                        <Form.Item
                          label='Business Name'
                          name='businessName'
                          rules={Rules.Required}
                        >
                          <Input className='primary-input' />
                        </Form.Item>
                        <Form.Item
                          label='Position (Title)'
                          name='position'
                          rules={Rules.Name}
                        >
                          <Input className='primary-input' />
                        </Form.Item>
                      </div>

                      <Form.Item
                        label='Number of Branches'
                        name='numberOfBranches'
                        rules={Rules.NumberOfBranches}
                      >
                        <InputNumber className='primary-input-number' min={0} />
                      </Form.Item>

                      <Form.Item label='Number of Users' name='numberOfUsers'>
                        <InputNumber
                          min={0}
                          className='primary-input-number'
                          rules={Rules.NumberOfBranches}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </section>
                {/*Billing Address*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Billing Address</p>
                  <hr className='mt-1' />
                  <div className='mx-49'>
                    <div className='d-flex gap-24'>
                      <div>
                        <Form.Item
                          label='Country'
                          name='country'
                          rules={Rules.Required}
                        >
                          <CountryComponent />
                        </Form.Item>

                        <Form.Item
                          label='State'
                          name='state'
                          rules={Rules.Required}
                        >
                          <Input className='primary-input' />
                        </Form.Item>
                      </div>

                      <div>
                        <Form.Item
                          label='Address'
                          name='address'
                          rules={Rules.Required}
                        >
                          <Input className='primary-input' />
                        </Form.Item>
                        <Form.Item
                          label='Postal / Zip code'
                          name='postalCode'
                          rules={Rules.NumberOfBranches}
                        >
                          <InputNumber
                            min={0}
                            className='primary-input-number'
                          />
                        </Form.Item>
                      </div>

                      <Form.Item
                        label='City'
                        name='city'
                        rules={Rules.Required}
                      >
                        <Input className='primary-input' />
                      </Form.Item>
                    </div>
                  </div>
                </section>

                {
                  // Domain
                }
                <section>
                  <p className='f-16 fw-500 mb-0'>Plan Detail</p>
                  <hr className='mt-1' />
                  <div className='mx-49'>
                    <div className='d-flex gap-24'>
                      <div>
                        <Form.Item
                          label='Domain Name'
                          name='domainIdentifier'
                          rules={Rules.Required}
                        >
                          <Input
                            className='primary-input'
                            suffix={
                              <span className='input-domain-suffix'>.XYZ</span>
                            }
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </section>

                {
                  // action
                }
                <div className='d-flex justify-content-end align-items-center'>
                  <Link to='/manage-tenants'>
                    <Button className='default-button  mr-16'>Cancel</Button>
                  </Link>
                  <Button
                    htmlType='submit'
                    className='primary-button btn-cancel'
                  >
                    Update Tenant
                  </Button>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateTenant;
