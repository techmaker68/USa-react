import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import PLanDetail from "./PlanDetail";
import AllFeatures from "./AllFeatures";
import {Button} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {useState, useEffect} from "react";
import {Card} from "antd";

const Edit = () => {
  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/plans/features`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  const [features, setFeatures] = useState([]);
  useEffect(() => {
    if (response !== null) {
      setFeatures(response);
    }
  }, [response]);

  return (
    <Layout currentPage={5} title='User Management'>
      <div className='main-wrapper'>
        {
          // breadcrumbs
        }
        <Link to='/settings/all-plans' className='breadcrumb'>
          <img src={ArrowBack} alt='' />
          <span className='mt-0'>Back</span>
        </Link>
        <div className='page-card mt-20 create-plan-wrapper'>
          <h1>Create Plan</h1>
          <div className='create-plan-content'>
            {
              // plan details
            }
            <PLanDetail />
            {
              // vertical divider
            }
            <div className='vertical-divider' />

            {
              // all features
            }
            <Card loading={isLoading} bordered={false}>
              <AllFeatures features={features} setFeatures={setFeatures} />
            </Card>
          </div>
          <div className='d-flex justify-content-end align-items-center mt-16'>
            <Link to='/settings/all-plans'>
              <Button className='default-button btn-role mr-16'>Cancel</Button>
            </Link>
            <Button className='primary-button  btn-role'>Create Plan</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
