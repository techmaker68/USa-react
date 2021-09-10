import Layout from "Layout/Index";
import {Form, Radio, Button, Select} from "antd";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import Cash from "Components/ManageTenants/PaymentModes/Cash";
import Cheque from "Components/ManageTenants/PaymentModes/Cheque";
import {useState} from "react";
import BankTransfer from "Components/ManageTenants/PaymentModes/BankTransfer";

const {Option} = Select;

const Upgrade = () => {
  const [paymentMethod, setPaymentMethod] = useState(0);

  const handlePaymentMethod = ({target}) => {
    setPaymentMethod(target.value);
  };
  return (
    <Layout title='Manage Tenants' currentPage={2}>
      <div className='main-wrapper'>
        <Form>
          <div className='page-card manage-tenants-create'>
            <div className='page-card-header d-flex justify-content-between align-item-center'>
              {
                // breadcrumbs
              }
              <Link to='/manage-tenants' className='breadcrumb'>
                <img src={ArrowBack} alt='' />
                <span className='mt-0'>Upgrade Plan</span>
              </Link>
            </div>
            <div className='page-card__content'>
              <Form layout='vertical' initialValues={{payment_mode: 0}}>
                {/*Plan Details*/}
                <section className='mb-24'>
                  <p className='f-16 fw-500 mb-0'>Plan Detail</p>
                  <hr className='mt-1' />
                  <div className='mx-49 d-flex gap-24'>
                    <Form.Item label='Plan Name'>
                      <Select
                        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                        className='primary-select-option'
                      >
                        <Option>Business</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label='Billing Type'>
                      <Select
                        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                        className='primary-select-option'
                      >
                        <Option>Annually</Option>
                      </Select>
                    </Form.Item>
                  </div>
                </section>

                {
                  // Payment options
                }
                <section>
                  <p className='f-16 fw-500 mb-0'>Payment Information</p>
                  <hr className='mt-1' />
                  <div className='mx-49'>
                    <div className='d-flex gap-24'>
                      <div>
                        <h2 className='f-14 fw-700 mb-24'>Payment Mode</h2>
                        <Form.Item>
                          <Form.Item name='payment_mode'>
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
                            <Cheque />
                          ) : paymentMethod === 2 ? (
                            <BankTransfer />
                          ) : (
                            <Cash />
                          )}
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
                    Upgrade Plan
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default Upgrade;
