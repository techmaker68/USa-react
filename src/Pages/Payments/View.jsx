import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import {Button, Switch} from "antd";
import PaymentCard from "./../../Components/Payments/PaymentCard";

const View = () => {
  // dummy data
  const data = {
    id: 0,
    key: "1",
    invoiceId: "ERP - 26 July - 102",
    bushinessName: "Tashoba Industries",
    billingType: "Bank Transfer",
    amount: "100 SAR",
    paymentDate: "26 July, 2022",
    dueDate: "26 July, 2022",
    autoRenew: "yes",
    paymentStatus: "Paid",
    accessStatus: "InActive",
  };

  return (
    <Layout title='Payments Overview' currentPage={1}>
      <div className='main-wrapper'>
        <div className='view-payment-wrapper view-page'>
          {
            // header
          }
          <div className='view-page-header d-flex  justify-content-between align-item-center'>
            {
              // breadcrumbs
            }
            <Link to='/payments' className='breadcrumb'>
              <img src={ArrowBack} alt='' /> <span>{data?.invoiceId}</span>
            </Link>

            <div>
              <Button className='default-button btn-v-invoice mr-16'>
                View Invoice
              </Button>
              <Button className='primary-button btn-d-invoice'>
                Download Invoice
              </Button>
            </div>
          </div>

          {
            // content
          }
          <div className='d-flex justify-content-between'>
            <section>
              {
                // status
              }
              <div className='d-flex payment-status mb-40'>
                <div className='mr-95'>
                  <p className='f-12 fw-500 color-silver-chalice mb-11'>
                    Payment Status
                  </p>
                  <Switch className='primary-switch mr-7' />
                  <span className='f-16 fw-600 color-danger align-middle'>
                    Unpaid
                  </span>
                </div>
                <div>
                  <p className='f-12 fw-500 color-silver-chalice mb-11'>
                    Access Status
                  </p>
                  <Switch className='primary-switch mr-7' />
                  <span className='f-16 fw-600 color-danger align-middle'>
                    In Active
                  </span>
                </div>
              </div>

              {
                // business details
              }
              <h2 className='f-16 fw-500 mb-24'>Business Details</h2>
              <ul className='list-inline business-details'>
                <li className='list-inline-item'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Business Name
                  </h3>
                  <p className='fw-500'>Tashoba Industries</p>
                </li>
                <li className='list-inline-item'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Amount
                  </h3>
                  <p className='fw-500'>100 SAR</p>
                </li>
                <li className='list-inline-item'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Credit Card
                  </h3>
                  <p className='fw-500'>24607288162582</p>
                </li>
              </ul>

              {
                // Plan details
              }
              <h2 className='f-16 fw-500 mb-24'>Business Details</h2>
              <ul className='list-inline'>
                <li className='list-inline-item'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Plan Name
                  </h3>
                  <p className='fw-500'>Business plan</p>
                </li>
                <li className='list-inline-item'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Billing Type
                  </h3>
                  <p className='fw-500'>Bank Transfer</p>
                </li>
                <li className='list-inline-item'>
                  <h3 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Domain Name
                  </h3>
                  <p className='fw-500'>Toshiba@jmm.xyz</p>
                </li>
              </ul>
            </section>

            {
              // payment card
            }
            <section>
              <PaymentCard />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
