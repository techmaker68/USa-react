import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import PLanDetail from "./PlanDetail";
import AllFeatures from "./AllFeatures";
import {Button} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {useState, useEffect} from "react";
import {Card, Form, message} from "antd";
import {useHistory} from "react-router";
import Http from "Http";

const Edit = () => {
  // Fetch Data - http request
  const {response, isLoading, error} = UseAxios({
    endpoint: `/plans/features`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  const [charges, setCharges] = useState({
    monthlyCharges: 0,
    annuallyCharges: 0,
    discount: 0,
  });

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setFeatures(response.map((feature) => ({...feature, check: false})));
    }
  }, [response]);

  const history = useHistory();
  // create new plan
  const handleCreatePlan = (values) => {
    let filteredFeatures = features.filter((feature) => feature.check);

    const formData = {
      planName: values.planName,
      monthlyCharges: charges?.monthlyCharges,
      yearlyCharges: charges?.annuallyCharges,
      yearlyChargesDiscountPercentage: values.yearlyChargesDiscountPercentage,
      numberOfUsers: values.numberOfUsers,
      databaseSize: values.databaseSize,
      discountPercentage: charges?.discount,
      features: filteredFeatures,
    };

    Http.post(`/plans`, formData)
      .then((res) => {
        message.success("Plan Created successfully");
        history.push("/settings/all-plans");
      })
      .catch((err) => {
        Object.keys(err.response.data).forEach((element) => {
          message.error(err.response.data[element][0]);
        });
      });
  };

  // update annual, monthly & calculate discount.
  const handleCharges = ({target}) => {
    let discount = 0;
    if (target.name === "monthlyCharges") {
      discount = Math.round(
        ((target.value * 12 - charges.annuallyCharges) /
          charges.annuallyCharges) *
          100
      );
    } else {
      discount = Math.round(
        ((charges.monthlyCharges * 12 - target.value) / target.value) * 100
      );
    }

    if (discount >= 0 && discount < 100)
      setCharges({...charges, [target.name]: target.value, discount: discount});
    else setCharges({...charges, [target.name]: target.value, discount: 0});
  };

  return (
    <Layout currentPage={5} title='User Management'>
      <div className='main-wrapper'>
        {
          // breadcrumbs
        }
        <Form layout='vertical' onFinish={handleCreatePlan}>
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
              <PLanDetail charges={charges} handleCharges={handleCharges} />
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
                <Button className='default-button btn-role mr-16'>
                  Cancel
                </Button>
              </Link>
              <Button htmlType='submit' className='primary-button  btn-role'>
                Create Plan
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default Edit;
