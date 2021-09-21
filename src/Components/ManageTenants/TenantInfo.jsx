import {Button} from "antd";
import {Link} from "react-router-dom";
import {UseAxios} from "Hooks/useAxios";
import {BillingType} from "Constants/Global";

// render tenant details
const TenantInfo = ({tenantID}) => {
  // Fetch Data - http request
  const {
    response: data,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/Tenants/${tenantID}`, // setup base URL in UseAxios file.
    method: "get", // http request method
    errorsMessage: {404: "Page not exist."}, // error message for expected errors - string
    successMessage: "", // success message
  });

  return (
    <div className='view-requests-wrapper page-card'>
      <div className='page-card-header d-flex justify-content-between align-item-center'>
        <h1 className='f-16 fw-700 line-36 mb-0'>Tenant Information</h1>
        {
          // actions
        }
        <div>
          <Button className='default-button btn-reset-cred mr-16'>
            Reset Credentials
          </Button>
          <Link to='/manage-tenants/0/update'>
            <Button className='primary-button btn-edit'>Edit</Button>
          </Link>
        </div>
      </div>

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
              <p className='fw-500'>{data?.firstName}</p>
            </div>
            <div>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Mobile Number
              </h2>
              <p className='fw-500'>{data?.phoneNumber}</p>
            </div>
          </div>
          <div className='mr-170'>
            <div className='mb-24'>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Last Name
              </h2>
              <p className='fw-500'>{data?.lastName}</p>
            </div>
          </div>
          <div>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>Email</h2>
            <p className='fw-500'>{data?.email}</p>
          </div>
        </div>
      </section>
      {
        // Business details
      }
      <section className='demo-request-details mt-30'>
        <h1 className='f-16 fw-500 mb-25'>Business Detail</h1>
        <div className='d-flex mx-49'>
          <div className='mr-170'>
            <div className='mb-24'>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Business Name
              </h2>
              <p className='fw-500'>{data?.businessName}</p>
            </div>
            <div>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Position (Title)
              </h2>
              <p className='fw-500'>{data?.position}</p>
            </div>
          </div>

          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Number of Branches
            </h2>
            <p className='fw-500'>{data?.numberOfBranches}</p>
          </div>

          <div>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Number Of Users
            </h2>
            <p className='fw-500'>{data?.numberOfUsers}</p>
          </div>
        </div>
      </section>
      {
        // Billing details
      }
      <section className='demo-request-details mt-30'>
        <h1 className='f-16 fw-500 mb-25'>Billing Address</h1>
        <div className='d-flex mx-49'>
          <div className='mr-170'>
            <div className='mb-24'>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Country
              </h2>
              <p className='fw-500'>{data?.country}</p>
            </div>
            <div>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>State</h2>
              <p className='fw-500'>{data?.state}</p>
            </div>
          </div>

          <div className='mr-170'>
            <div className='mb-24'>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Address
              </h2>
              <p className='fw-500'>{data?.address}</p>
            </div>
            <div>
              <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                Postal / Zip code
              </h2>
              <p className='fw-500'>{data?.postalCode}</p>
            </div>
          </div>

          <div>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>City</h2>
            <p className='fw-500'>{data?.city}</p>
          </div>
        </div>
      </section>
      {
        // Request Date Information
      }
      <section className='demo-request-details mt-30 mb-50'>
        <h1 className='f-16 fw-500 mb-25'>Payment Information</h1>
        <div className='d-flex mx-49'>
          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>Amount</h2>
            <p className='fw-500'>200 SAR</p>
          </div>

          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Payment Date
            </h2>
            <p className='fw-500'>26 July, 2021</p>
          </div>
          <div>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Recieved By
            </h2>
            <p className='fw-500 d-inline-block'>Hassan Jamal</p>
          </div>
        </div>
      </section>
      {
        // Plan Detail
      }
      <section className='demo-request-details mt-30 mb-50'>
        <h1 className='f-16 fw-500 mb-25'>Plan Detail</h1>
        <div className='d-flex mx-49'>
          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Plan Name
            </h2>
            <p className='fw-500'>Business</p>
          </div>

          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Billing Type
            </h2>
            <p className='fw-500'>{BillingType[data?.billingType]}</p>
          </div>
        </div>
      </section>
      {
        // Resources Utilization
      }
      <section className='demo-request-details mt-30 mb-50'>
        <h1 className='f-16 fw-500 mb-25'>Resources Utilizations</h1>
        <div className='d-flex mx-49'>
          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Domain Name
            </h2>
            <p className='fw-500'>techrus@erp.com</p>
          </div>

          <div className='mb-24 mr-170'>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Users Created
            </h2>
            <p className='fw-500'>
              <span className='color-danger fw-700'>02</span>
              <span className='color-silver-chalice fw-500 d-inline-block mx-1'>
                out of
              </span>
              <span className='color-success fw-700'>10</span>
            </p>
          </div>
          <div>
            <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
              Database Usage
            </h2>
            <p className='fw-500 d-inline-block'>
              <span className='color-danger fw-700'>02 GB</span>
              <span className='color-silver-chalice fw-500 d-inline-block mx-1'>
                out of
              </span>
              <span className='color-success fw-700'>10 GB</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenantInfo;
