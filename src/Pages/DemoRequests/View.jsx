import Layout from "Layout/Index";
import {Link} from "react-router-dom";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Button, message, DatePicker} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {useParams} from "react-router-dom";
import moment from "moment";
import Http from "Http";
import {useState, useEffect} from "react";

const View = () => {
  const {id} = useParams();

  const [refreshPage, setRefreshPage] = useState({refresh: false});
  const [extentDate, setExtentDate] = useState({show: false, date: ""});

  // Fetch Data - http request
  const {
    response: data,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/demo/${id}`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [refreshPage], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  useEffect(() => {
    setExtentDate({...extentDate, date: data.demoEndDate});
  }, [data, refreshPage]);

  const handleChangeStatus = (e) => {
    Http.put(`/demo/${data.id}?status=${e}`)
      .then((res) => {
        e === 1
          ? message.success("Demo Request Approved Successfully")
          : message.success("Demo Request Declined Successfully");
        setRefreshPage({refresh: !refreshPage.refresh});
      })
      .catch((err) => {
        if (err.response.status === 404) {
          message.error("Not found");
        }
      });
  };

  // extent date
  const handleExtendDate = () => {
    setExtentDate({...extentDate, show: true});
  };

  // update date
  const handleSaveExtend = () => {
    setExtentDate({...extentDate, show: false});

    Http.post(
      `/demo/${data.id}/extendate?extendedDate=${moment(extentDate.date).format(
        "YYYY-MM-D"
      )}`
    )
      .then((res) => {
        message.success("Date extended successfully");
        setRefreshPage({refresh: !refreshPage.refresh});
      })
      .catch((err) => {
        Object.keys(err.response.data).forEach((element) => {
          message.error(err.response.data[element][0]);
        });
        setRefreshPage({refresh: !refreshPage.refresh});
      });
  };

  // return days from date

  const GetDays = () => {
    return Math.round(
      moment
        .duration(moment(data?.demoEndDate, "YYYY-MM-DD").diff(moment()))
        .asDays()
    );
  };

  const handleDateChange = (e) => {
    setExtentDate({...extentDate, date: e._d});
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
              <Button
                onClick={() => handleChangeStatus(0)}
                className='default-button btn-demo-req mr-16'
              >
                Decline
              </Button>
              <Button
                onClick={() => handleChangeStatus(1)}
                className='primary-button btn-demo-req'
              >
                Approve
              </Button>
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
                <div>
                  <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                    Country
                  </h2>
                  <p className='fw-500'>{data?.country}</p>
                </div>
              </div>
              <div>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Email
                </h2>
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
              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Company
                </h2>
                <p className='fw-500'>{data?.businessName}</p>
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
            // Request Date Information
          }
          <section className='demo-request-details mt-30 mb-50'>
            <h1 className='f-16 fw-500 mb-25'>Request Date Information</h1>
            <div className='d-flex mx-49'>
              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Demo Request
                </h2>
                <p className='fw-500'>
                  {data?.requestDate
                    ? moment(data?.requestDate).format("DD MMMM, YYYY")
                    : "N/A"}
                </p>
              </div>

              <div className='mb-24 mr-170'>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Demo Start
                </h2>
                <p className='fw-500'>
                  {data?.requestStartOn
                    ? moment(data?.requestStartOn).format("DD MMMM, YYYY")
                    : "N/A"}
                </p>
              </div>
              <div>
                <h2 className='f-12 fw-500 color-silver-chalice mb-10'>
                  Demo End
                </h2>

                <div className='d-flex align-items-center'>
                  <p className='fw-500 d-inline-block'>
                    {data?.demoEndDate
                      ? moment(data?.demoEndDate).format("DD MMMM, YYYY")
                      : "N/A"}
                  </p>
                  {!extentDate.show && (
                    <u
                      className='color-info f-12 fw-700 ml-16 cursor-pointer'
                      onClick={handleExtendDate}
                    >
                      Extend Date
                    </u>
                  )}
                  {extentDate.show && (
                    <u
                      className='color-info f-12 fw-700 ml-16 cursor-pointer'
                      onClick={handleSaveExtend}
                    >
                      save
                    </u>
                  )}
                </div>
                {extentDate.show && (
                  <div className='mt-2'>
                    <DatePicker
                      clearIcon={false}
                      className='primary-date-picker'
                      defaultValue={moment(data?.demoEndDate)}
                      onChange={handleDateChange}
                      disabledDate={(current) => {
                        return (
                          moment(data?.demoEndDate).add(-1, "days") >= current
                        );
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className='alert-trial'>
            Note : Only {GetDays() ?? "N/A"} days left on your trial
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
