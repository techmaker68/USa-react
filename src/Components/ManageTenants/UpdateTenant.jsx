import Layout from "Layout/Index";
import {Form, Input, Switch, InputNumber, Button} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import PhoneInput from "react-phone-input-2";
import CountryComponent from "Components/Common/CountryComponent";
import CitySelect from "Components/Common/CitySelect";
import StateSelect from "Components/Common/StateSelect";

const UpdateTenant = () => {
  return (
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper'>
        <div className='page-card  update-tenant'>
          <div className='page-card-header d-flex justify-content-between align-item-center'>
            {
              // breadcrumbs
            }
            <Link to='/manage-tenants/0/tenants-info' className='breadcrumb'>
              <img src={ArrowBack} alt='' />
              <span className='mt-0'>Update Tenant</span>
            </Link>
            <div>
              <Switch defaultChecked className='primary-switch mr-7' />
              <span className='f-16 fw-600 color-apple align-middle mr-30'>
                Active
              </span>
              <Switch className='primary-switch mr-7' />
              <span className='f-16 fw-600 color-apple align-middle'>
                Auto Renew
              </span>
            </div>
          </div>
          <div className='page-card__content'>
            <Form layout='vertical' initialValues={{payment_mode: 0}}>
              {/*Personal Details*/}
              <section className='mb-24'>
                <p className='f-16 fw-500 mb-0'>Personal Information</p>
                <hr className='mt-1' />
                <div className='mx-49'>
                  <div className='d-flex gap-24'>
                    <div>
                      <Form.Item label='First Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                      <Form.Item label='Phone Number'>
                        <PhoneInput
                          country='sa'
                          placeholder='Enter phone number'
                          containerClass='primary-input-phone'
                        />
                      </Form.Item>
                    </div>

                    <Form.Item label='Last Name'>
                      <Input className='primary-input' />
                    </Form.Item>

                    <Form.Item label='Email'>
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
                      <Form.Item label='Business Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                      <Form.Item label={"Position (Title)"}>
                        <Input className='primary-input' />
                      </Form.Item>
                    </div>

                    <Form.Item label='Number of Branches'>
                      <InputNumber className='primary-input-number' min={0} />
                    </Form.Item>

                    <Form.Item label='Number of Users'>
                      <InputNumber min={0} className='primary-input-number' />
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
                      <Form.Item label='Country'>
                        <CountryComponent />
                      </Form.Item>
                      <Form.Item label='State'>
                        <StateSelect />
                      </Form.Item>
                    </div>

                    <div>
                      <Form.Item label='Address'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                      <Form.Item label='Postal / Zip code'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </div>

                    <Form.Item label='City'>
                      <CitySelect />
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
                      <Form.Item label='Domain Name'>
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
                <Button className='default-button  mr-16'>Cancel</Button>
                <Button className='primary-button btn-cancel'>
                  Update Tenant
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateTenant;
