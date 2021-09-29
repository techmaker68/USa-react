import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import EyeIcon from "Assets/icons/eye.svg";
import DownloadIcons from "Assets/icons/download.svg";
import {Link} from "react-router-dom";
import {Button, Switch, Radio, Form, message, Card} from "antd";
import PaymentCard from "Components/Payments/PaymentCard";
import CheckCard from "Components/Payments/CheckCard";
import BankCard from "Components/Payments/BankCard";
import {UseAxios} from "Hooks/useAxios";
import {useParams} from "react-router-dom";
import {AccessStatus, BillingType, PaymentStatus} from "Constants/Global";
import {useState} from "react";
import Cash from "Components/ManageTenants/PaymentModes/Cash";
import Cheque from "Components/ManageTenants/PaymentModes/Cheque";
import BankTransfer from "Components/ManageTenants/PaymentModes/BankTransfer";
import Http from "Http";
import moment from "moment";

const View = () => {
  const {id} = useParams();
  const [attachment, setAttachment] = useState("default");
  const [paymentMethod, setPaymentMethod] = useState(0);
  // Fetch Data - http request
  const {
    response: data,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/Payments/${id}`, // setup base URL in UseAxios file.
    method: "get", // http request method
    errorsMessage: {404: "Page not exist."}, // error message for expected errors - string
    successMessage: "", // success message
  });

  // update active status
  const handleAccessStatus = () => {};
  // handle payment method toggle
  const handlePaymentMethod = ({target}) => {
    setPaymentMethod(target.value);
  };

  // pay payment
  const handleUnpaidPayments = (values) => {
    if (paymentMethod && (attachment.length < 1 || attachment === "default")) {
      setAttachment([]);
      message.error(`Form submission failed. Attachment/File is required`);
      return;
    }

    const formData = new FormData();

    formData.append("Amount", values.Amount);
    if (attachment.length > 0) {
      formData.append("Attachement", attachment[0]);
    }
    if (paymentMethod === 1) {
      formData.append(
        "ChequeDate",
        values?.ChequeDate && moment(values.ChequeDate).format("YYYY-MM-D")
      );
    } else {
      formData.append(
        "PaymentDate",
        values?.PaymentDate && moment(values.PaymentDate).format("YYYY-MM-D")
      );
    }
    formData.append("BankName", values.BankName);
    formData.append("PayeeName", values.PayeeName);
    formData.append("ChequeNumber", values.ChequeNumber);
    formData.append("FromAccountNumber", values.FromAccountNumber);
    formData.append("ToAccountNumber", values.ToAccountNumber);
    formData.append("BillingType", data?.billingType);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    Http.post(`/payments/${id}/makepaid`)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => console.log("err", err));
  };

  const handleFinishFailed = ({errorFields}) => {
    if (attachment === "default") setAttachment([]);
    if (errorFields.length > 0) {
      message.error(`Form submission failed, ${errorFields[0].errors[0]}`);
    }
  };
  return (
    <Layout title='Payments Overview' currentPage={1}>
      <div className='main-wrapper'>
        <div className='view-payment-wrapper page-card'>
          {
            // header
          }
          <div className='page-card-header d-flex  justify-content-between align-item-center'>
            {
              // breadcrumbs
            }
            <Link to='/payments' className='breadcrumb'>
              <img src={ArrowBack} alt='' /> <span>{data?.displayId}</span>
            </Link>

            <div>
              <Button className='default-button btn-v-invoice mr-16'>
                <img className='mr-7' src={EyeIcon} alt='' /> View Invoice
              </Button>
              <Button className='primary-button btn-d-invoice'>
                <img className='mr-7' src={DownloadIcons} alt='' /> Download
                Invoice
              </Button>
            </div>
          </div>
          {
            // content
          }
          <div className='d-flex justify-content-between flex-wrap'>
            <section className='w-47-p mr-5 '>
              {
                // status
              }
              <div className='d-flex payment-status mb-40 flex-wrap'>
                <div className='mr-95'>
                  <p className='f-12 fw-500 color-silver-chalice mb-11'>
                    Payment Status
                  </p>

                  <span
                    className={`f-16 fw-600 color-${
                      PaymentStatus[data?.paymentStatus]
                    } align-middle`}
                  >
                    {PaymentStatus[data?.paymentStatus]}
                  </span>
                </div>
                <div>
                  <p className='f-12 fw-500 color-silver-chalice mb-11'>
                    Access Status
                  </p>
                  <Switch
                    checked={AccessStatus?.accessStatus}
                    className='primary-switch mr-7'
                    onChange={handleAccessStatus}
                  />
                  <span className='f-16 fw-600 color-danger align-middle'>
                    In Active
                  </span>
                </div>
              </div>

              {
                // business details
              }
              <h2 className='f-16 fw-500 mb-24'>Business Details</h2>
              <div className='d-flex business-details justify-content-between flex-wrap'>
                <div>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Business Name
                  </h3>
                  <p className='fw-500'>{data?.businessName}</p>
                </div>
                <div className=' text-nowrap'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10 '>
                    Amount
                  </h3>
                  <p className='fw-500'>{data?.amount} SAR</p>
                </div>
                {data?.paymentMethod === 1 ? (
                  <div>
                    <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                      Cheque Number
                    </h3>
                    <p className='fw-500'>{data?.chequeNumber}</p>
                  </div>
                ) : data?.paymentMethod === 2 ? (
                  <div>
                    <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                      Transaction ID
                    </h3>
                    <p className='fw-500'>24607288162582</p>
                  </div>
                ) : (
                  data?.paymentMethod === 3 && (
                    <div>
                      <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                        Credit Card Number
                      </h3>
                      <p className='fw-500'>24607288162582</p>
                    </div>
                  )
                )}
              </div>

              {
                // Plan details
              }
              <h2 className='f-16 fw-500 mb-24'>Plan Details</h2>
              <div className='d-flex justify-content-between'>
                <div className=' text-nowrap'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Plan Name
                  </h3>
                  <p className='fw-500'>{data?.planName}</p>
                </div>
                <div className=' text-nowrap'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Billing Type
                  </h3>
                  <p className='fw-500'>{BillingType[data?.billingType]}</p>
                </div>
                <div className=' text-nowrap'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Domain Name
                  </h3>
                  <p className='fw-500'>{data?.domain}</p>
                </div>
              </div>
            </section>

            {
              // Return payment method card.
            }
            {data?.paymentStatus ? (
              <section className='w-50'>
                {data?.paymentMethod === 1 ? (
                  <CheckCard data={data} />
                ) : data?.paymentMethod === 2 ? (
                  <BankCard data={data} />
                ) : data?.paymentMethod === 3 ? (
                  <PaymentCard data={data} />
                ) : (
                  ""
                )}
              </section>
            ) : (
              ""
            )}
          </div>

          {
            // payment details section for unpaid payments.
          }
          {!data?.paymentStatus && (
            <section className='mt-20 unpaid-payment-section'>
              <h1 className='f-16 fw-500 mb-15'>Payment Details</h1>
              <Card bordered={false} loading={isLoading}>
                <Form
                  layout='vertical'
                  className='ml-40'
                  initialValues={{payment_mode: 0, Amount: data?.amount}}
                  onFinish={handleUnpaidPayments}
                  onFinishFailed={handleFinishFailed}
                >
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
                    <Cheque
                      setAttachment={setAttachment}
                      attachment={attachment}
                      disable={{amount: false, max: data?.amount}}
                    />
                  ) : paymentMethod === 2 ? (
                    <BankTransfer
                      setAttachment={setAttachment}
                      attachment={attachment}
                      disable={{amount: false, max: data?.amount}}
                    />
                  ) : (
                    <Cash
                      setAttachment={setAttachment}
                      attachment={attachment}
                      disable={{amount: false, max: data?.amount}}
                    />
                  )}
                  <div className='text-end'>
                    <Link to='/payments'>
                      <Button className='default-button mr-16'>Cancel</Button>
                    </Link>
                    <Button htmlType='submit' className='primary-button'>
                      Confirm Payment
                    </Button>
                  </div>
                </Form>
              </Card>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default View;
