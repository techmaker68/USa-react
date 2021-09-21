import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import EyeIcon from "Assets/icons/eye.svg";
import DownloadIcons from "Assets/icons/download.svg";
import {Link} from "react-router-dom";
import {Button, Switch} from "antd";
import PaymentCard from "Components/Payments/PaymentCard";
import CheckCard from "Components/Payments/CheckCard";
import BankCard from "Components/Payments/BankCard";
import {UseAxios} from "Hooks/useAxios";
import {useParams} from "react-router-dom";
import {AccessStatus, BillingType} from "Constants/Global";

const View = () => {
  const {id} = useParams();

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
          <div className='d-flex justify-content-between'>
            <section className='w-60-p mr-80'>
              {
                // status
              }
              <div className='d-flex payment-status mb-40'>
                <div className='mr-95'>
                  <p className='f-12 fw-500 color-silver-chalice mb-11'>
                    Payment Status
                  </p>

                  <span className='f-16 fw-600 color-danger align-middle'>
                    Unpaid
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
              <div className='d-flex business-details'>
                <div className='mr-250'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Business Name
                  </h3>
                  <p className='fw-500'>{data?.businessName}</p>
                </div>
                <div>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Amount
                  </h3>
                  <p className='fw-500'>{data?.amount} SAR</p>
                </div>
                {data?.paymentMethod !== 0 && (
                  <div className='mr-250'>
                    <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                      Credit Card
                    </h3>
                    <p className='fw-500'>24607288162582</p>
                  </div>
                )}
              </div>

              {
                // Plan details
              }
              <h2 className='f-16 fw-500 mb-24'>Plan Details</h2>
              <div className='d-flex'>
                <div className='mr-250 text-nowrap'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Plan Name
                  </h3>
                  <p className='fw-500'>{data?.planName}</p>
                </div>
                <div className='mr-250 text-nowrap'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Billing Type
                  </h3>
                  <p className='fw-500'>{BillingType[data?.billingType]}</p>
                </div>
                <div className='mr-250 text-nowrap'>
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
            <section>
              {data?.paymentMethod === 1 ? (
                <CheckCard />
              ) : data?.paymentMethod === 2 ? (
                <BankCard />
              ) : data?.paymentMethod === 3 ? (
                <PaymentCard />
              ) : (
                ""
              )}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
