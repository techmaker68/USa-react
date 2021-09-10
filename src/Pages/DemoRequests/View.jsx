import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Button} from "antd";

const View = () => {
  // dummy data
  const data = {
    id: 7,
    key: "8",
    fullName: "Muzamil Afridi",
    email: "muzamil@gmail.com",
    phoneNumber: "+ 92 346 1728 826",
    country: "Saudi Arabia",
    company: "Teshwa Tech",
    noOfUsers: "10",
    requestDate: "20 July, 2021",
    status: "Approved",
  };

  return (
    <Layout title='Demo Requests' currentPage={3}>
      <div className='main-wrapper'>
        <div className='view-requests-wrapper page-card'>
          <div className='page-card-header d-flex justify-content-between align-item-center'>
            {
              // breadcrumbs
            }
            <Link to='/demo-requests' className='breadcrumb'>
              <img src={ArrowBack} alt='' /> <span>Back</span>
            </Link>
            {
              // actions
            }
            <div>
              <Button className='default-button btn-demo-req mr-16'>
                Decline
              </Button>
              <Button className='primary-button btn-demo-req'>Approve</Button>
            </div>
          </div>
          {
            // blink status
          }
          <p className='text-end mb-10'>
            <span className='f-12 color-gray'>Status</span>
            <span className='color-Active f-14 d-inline-block ml-9'>
              <span className='status-dot' /> Active
            </span>
          </p>
          {
            // personal info
          }
          <section className='demo-request-details'>
            <h1 className='f-16 fw-500 mb-25'>Personal Information</h1>
            <div className='d-flex mx-49'>
              <div className='mr-170'>
                <div className='mb-24'>
                  <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                    First Name
                  </h2>
                  <p className='fw-500'>Muzamil</p>
                </div>
                <div>
                  <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Mobile Number
                  </h2>
                  <p className='fw-500'>+92 345 2738 273</p>
                </div>
              </div>
              <div className='mr-170'>
                <div className='mb-24'>
                  <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Last Name
                  </h2>
                  <p className='fw-500'>Muzamil</p>
                </div>
                <div>
                  <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Country
                  </h2>
                  <p className='fw-500'>Saudi Arabia</p>
                </div>
              </div>
              <div>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Email
                </h2>
                <p className='fw-500'>muzamil@gmail.com</p>
              </div>
            </div>
          </section>
          {
            // Business details
          }
          <section className='demo-request-details mt-30'>
            <h1 className='f-16 fw-500 mb-25'>Business Detail</h1>
            <div className='d-flex mx-49'>
              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Company
                </h2>
                <p className='fw-500'>Tresco Industries</p>
              </div>

              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Numbet of Branches
                </h2>
                <p className='fw-500'>02</p>
              </div>

              <div>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Number Of Users
                </h2>
                <p className='fw-500'>10</p>
              </div>
            </div>
          </section>
          {
            // Request Date Information
          }
          <section className='demo-request-details mt-30 mb-50'>
            <h1 className='f-16 fw-500 mb-25'>Request Date Information</h1>
            <div className='d-flex mx-49'>
              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Demo Request
                </h2>
                <p className='fw-500'>29 July, 2021</p>
              </div>

              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Demo Start
                </h2>
                <p className='fw-500'>30 July, 2021</p>
              </div>
              <div>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Demo End
                </h2>
                <p className='fw-500 d-inline-block'>14 August, 2021</p>
                <u className='color-info f-12 fw-700 ml-16'>Extend Date</u>
              </div>
            </div>
          </section>

          <div className='alert-trial'>
            Note : Only 10 days left on your trial
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
