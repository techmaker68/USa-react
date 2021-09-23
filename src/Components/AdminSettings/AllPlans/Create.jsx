import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import PLanDetail from "./PlanDetail";
import AllFeatures from "./AllFeatures";

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
            <AllFeatures />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
