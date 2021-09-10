import Layout from "Layout/Index";
import {Form, Input, Row, Col, InputNumber, Radio, Select} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import PhoneInput from "react-phone-input-2";
import CountryComponent from "Components/Common/CountryComponent";
import CitySelect from "Components/Common/CitySelect";
import StateSelect from "Components/Common/StateSelect";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import Cash from "Components/ManageTenants/PaymentModes/Cash";
import Cheque from "Components/ManageTenants/PaymentModes/Cheque";
import {useState} from "react";
import BankTransfer from "Components/ManageTenants/PaymentModes/BankTransfer";

const {Option} = Select;

const CreateTenant = () => {
  const [paymentMethod, setPaymentMethod] = useState(0);

  const handlePaymentMethod = ({target}) => {
    setPaymentMethod(target.value);
  };
  return (
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper'>
        <div className='page-card manage-tenants-create'>
          <div className='page-card-header d-flex justify-content-between align-item-center'>
            {
              // breadcrumbs
            }
            <Link to='/manage-tenants' className='breadcrumb'>
              <img src={ArrowBack} alt='' /> <span className='mt-0'>Back</span>
            </Link>
          </div>
          <div className='manage-tenants-create__content'>
            <Form layout='vertical' initialValues={{payment_mode: 1}}>
              {/*Personal Details*/}
              <section className='mb-24'>
                <p className='f-16 fw-500 mb-0'>Personal Information</p>
                <hr className='mt-1' />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='First Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Last Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Email'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Phone Number'>
                        <PhoneInput
                          country='sa'
                          placeholder='Enter phone number'
                          containerClass='primary-input-phone'
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
              {/*Business Details*/}
              <section className='mb-24'>
                <p className='f-16 fw-500 mb-0'>Business Detail</p>
                <hr className='mt-1' />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Business Name'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Number of Branches'>
                        <InputNumber className='primary-input-number' min={0} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Number of Users'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label={"Position (Title)"}>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
              {/*Billing Address*/}
              <section className='mb-24'>
                <p className='f-16 fw-500 mb-0'>Billing Address</p>
                <hr className='mt-1' />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Country'>
                        <CountryComponent />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Address'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='City'>
                        <CitySelect />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='State'>
                        <StateSelect />
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Postal / Zip code'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
              {/*Payment Information*/}
              <section className='mb-24'>
                <p className='f-16 fw-500 mb-0'>Payment Information</p>
                <hr className='mt-1' />
                <div className='mx-49'>
                  <h2 className='f-14 fw-700 mb-24'>Payment Mode</h2>
                  <Row gutter={[24, 16]}>
                    <Col xs={24}>
                      <Form.Item name='payment_mode'>
                        <Radio.Group
                          onChange={handlePaymentMethod}
                          className='primary-radio-group'
                          defaultValue={paymentMethod}
                        >
                          <Radio value={0}>Cash</Radio>
                          <Radio value={1}>Cheque</Radio>
                          <Radio value={2}>Bank Transfer</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>

                  {/* <Cash /> */}
                  {/* <Cheque /> */}
                  <BankTransfer />
                </div>
              </section>

              {/*Plan detail*/}
              <section>
                <p className='f-16 fw-500 mb-0'>Plan Detail</p>
                <hr className='mt-1' />
                <div className='mx-49'>
                  <Row gutter={[24, 16]}>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Plan Name'>
                        <Select
                          suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                          className='primary-select-option'
                        >
                          <Option value='0'>Business</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Billing Type'>
                        <Select
                          suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                          className='primary-select-option'
                        >
                          <Option value='0'>Annually</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} lg={8}>
                      <Form.Item label='Domain Name'>
                        <Input
                          className='primary-input'
                          suffix={
                            <span className='input-domain-suffix'>.XYZ</span>
                          }
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </section>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTenant;
