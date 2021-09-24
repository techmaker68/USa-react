import Layout from "Layout/Index";
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Button,
  message,
  Card,
} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import PhoneInput from "react-phone-input-2";
import CountryComponent from "Components/Common/CountryComponent";
import CitySelect from "Components/Common/CitySelect";
import StateSelect from "Components/Common/StateSelect";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import Cash from "Components/ManageTenants/PaymentModes/Cash";
import Cheque from "Components/ManageTenants/PaymentModes/Cheque";
import BankTransfer from "Components/ManageTenants/PaymentModes/BankTransfer";
import {useState, useEffect} from "react";
import {UseAxios} from "Hooks/useAxios";

const {Option} = Select;

const CreateTenant = () => {
  const [paymentMethod, setPaymentMethod] = useState(0);

  const handlePaymentMethod = ({target}) => {
    setPaymentMethod(target.value);
  };

  const [planAmount, setPlanAmount] = useState({
    currentPlan: "",
    amount: 0,
    billingType: 0,
  });

  // Fetch plans
  const {
    response: plans,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/plans`, // setup base URL in UseAxios file.
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // use effect
  useEffect(() => {
    if (plans !== null) {
      UpdatePlanAmount(plans[0], planAmount.billingType);
    }
  }, [plans]);

  // handle create tenant
  const handleCreateTenant = (values) => {
    console.log("values", values);
  };

  const handlePlanChange = (id) => {
    let currentPlan = plans.filter((planAmount) => planAmount.id === id);

    UpdatePlanAmount(currentPlan[0], planAmount.billingType);
  };

  const handleBillingType = (currentType) => {
    UpdatePlanAmount(planAmount?.currentPlan, currentType);
  };

  // Update Plan Amount
  const UpdatePlanAmount = (currentPlan, billingType) => {
    if (currentPlan) {
      if (!billingType) {
        setPlanAmount({
          billingType,
          currentPlan,
          amount: currentPlan.monthlyChargesAmount,
        });
      } else {
        setPlanAmount({
          billingType,
          currentPlan,
          amount: currentPlan.annuallyChargesAmount,
        });
      }
    }
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
          <div className='page-card__content'>
            <Card loading={isLoading}>
              <Form
                onFinish={handleCreateTenant}
                layout='vertical'
                initialValues={{planName: plans[0]?.planName, BillingType: 0}}
              >
                {/*Personal Details*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Personal Information</p>
                  <hr className='mt-1' />
                  <div className='mx-49 d-flex gap-24'>
                    <div>
                      <Form.Item label='First Name' name='FirstName'>
                        <Input className='primary-input' />
                      </Form.Item>

                      <Form.Item label='Phone Number' name='PhoneNumber'>
                        <PhoneInput
                          country='sa'
                          placeholder='Enter phone number'
                          containerClass='primary-input-phone'
                        />
                      </Form.Item>
                    </div>

                    <Form.Item label='Last Name' name='LastName'>
                      <Input className='primary-input' />
                    </Form.Item>

                    <Form.Item label='Email' name='Email'>
                      <Input className='primary-input' />
                    </Form.Item>
                  </div>
                </section>
                {/*Business Details*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Business Detail</p>
                  <hr className='mt-1' />
                  <div className='mx-49 d-flex gap-24'>
                    <div>
                      <Form.Item label='Business Name' name='BusinessName'>
                        <Input className='primary-input' />
                      </Form.Item>

                      <Form.Item label='Position (Title)' name='Position'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </div>

                    <Form.Item
                      label='Number of Branches'
                      name='NumberOfBranches'
                    >
                      <InputNumber className='primary-input-number' min={0} />
                    </Form.Item>

                    <Form.Item label='Number of Users' name='NumberOfUsers'>
                      <InputNumber min={0} className='primary-input-number' />
                    </Form.Item>
                  </div>
                </section>
                {/*Billing Address*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Billing Address</p>
                  <hr className='mt-1' />
                  <div className='mx-49 d-flex gap-24'>
                    <div>
                      <Form.Item label='Country' name='Country'>
                        <CountryComponent />
                      </Form.Item>

                      <Form.Item label='State' name='State'>
                        <StateSelect />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item label='Address' name='Address'>
                        <InputNumber min={0} className='primary-input-number' />
                      </Form.Item>
                      <Form.Item label='Postal / Zip code'>
                        <Input className='primary-input' />
                      </Form.Item>
                    </div>

                    <Form.Item label='City' name='City'>
                      <CitySelect />
                    </Form.Item>
                  </div>
                </section>
                {/*Payment Information*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Payment Information</p>
                  <hr className='mt-1' />
                  <div className='mx-49'>
                    <h2 className='f-14 fw-700 mb-24'>Payment Mode</h2>
                    <Form.Item name='PaymentMethod' initialValue={0}>
                      <Radio.Group
                        onChange={handlePaymentMethod}
                        className='primary-radio-group'
                      >
                        <Radio value={0}>Cash</Radio>
                        <Radio value={1}>Cheque</Radio>
                        <Radio value={2}>Bank Transfer</Radio>
                      </Radio.Group>
                    </Form.Item>

                    {paymentMethod === 1 ? (
                      <Cheque planAmount={planAmount} />
                    ) : paymentMethod === 2 ? (
                      <BankTransfer planAmount={planAmount} />
                    ) : (
                      <Cash planAmount={planAmount} />
                    )}
                  </div>
                </section>

                {/*Plan detail*/}
                <section>
                  <p className='f-16 fw-500 mb-0'>Plan Detail</p>
                  <hr className='mt-1' />
                  <div className='mx-49 d-flex gap-24'>
                    <Form.Item label='Plan Name' name='planName'>
                      <Select
                        dropdownMatchSelectWidth={false}
                        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                        className='primary-select-option'
                        onChange={handlePlanChange}
                      >
                        {Array.isArray(plans) &&
                          plans.map((planAmount) => (
                            <Option key={planAmount.id} value={planAmount?.id}>
                              {planAmount?.planName}
                            </Option>
                          ))}
                      </Select>
                    </Form.Item>

                    <Form.Item label='Billing Type' name='BillingType'>
                      <Select
                        dropdownMatchSelectWidth={false}
                        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                        className='primary-select-option'
                        onChange={handleBillingType}
                      >
                        <Option value={0}>Monthly</Option>
                        <Option value={1}>Annually</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label='Domain Name' name='DomainIdentifier'>
                      <Input
                        className='primary-input'
                        suffix={
                          <span className='input-domain-suffix'>.XYZ</span>
                        }
                      />
                    </Form.Item>
                  </div>
                </section>

                {
                  // action
                }
                <div className='d-flex justify-content-end align-items-center m-t-5'>
                  <Button className='default-button  mr-16'>Cancel</Button>
                  <Button
                    htmlType='submit'
                    className='primary-button btn-cancel'
                  >
                    Create Tenant
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTenant;
