import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import PLanDetail from "./PlanDetail";
import AllFeatures from "./AllFeatures";
import {Button} from "antd";

const Edit = () => {
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
          <h1>Update Plan</h1>
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
            <AllFeatures />
          </div>
          <div className='d-flex justify-content-end align-items-center mt-16'>
            <Link to='/settings/all-plans'>
              <Button className='default-button btn-role mr-16'>Cancel</Button>
            </Link>
            <Button className='primary-button  btn-role'>Update Plan</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
