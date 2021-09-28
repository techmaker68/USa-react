import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import PLanDetail from "./PlanDetail";
import AllFeatures from "./AllFeatures";
import {Button} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {useState, useEffect} from "react";
import {Card, Form, message} from "antd";
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
  const [featureChecked, setFeatureChecked] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setFeatures(response);
    }
  }, [response]);

  const handleCreatePlan = (values) => {
    console.log("values", values);
    console.log("features", features);

    const formData = new FormData();
    formData.append("planName", values.planName);
    formData.append("monthlyCharges", charges?.monthlyCharges);
    formData.append("yearlyCharges", charges?.annuallyCharges);
    formData.append(
      "yearlyChargesDiscountPercentage",
      values.yearlyChargesDiscountPercentage
    );
    formData.append("numberOfUsers", values.numberOfUsers);
    formData.append("databaseSize", values.databaseSize);
    formData.append("discountPercentage", charges?.discount);
    features.forEach((feature, index) => {
      formData.append(`features[${index}][id]`, feature.id);
      formData.append(`features[${index}][title]`, feature.title);
    });

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    Http.post(`/plans`)
      .then((res) => {
        message.success("Plan Created successfully");
      })
      .catch((err) => message.error("Something went wrong"));
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

    if (discount >= 0 && discount < Infinity)
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
                <AllFeatures
                  features={features}
                  setFeatures={setFeatures}
                  featureChecked={featureChecked}
                  setFeatureChecked={setFeatureChecked}
                />
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
