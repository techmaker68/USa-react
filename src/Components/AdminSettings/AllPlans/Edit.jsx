import Layout from "Layout/Index";
import ArrowBack from "Assets/icons/arrow-back.svg";
import {Link} from "react-router-dom";
import PLanDetail from "./PlanDetail";
import AllFeatures from "./AllFeatures";
import {Button, Form, message, Card} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Http from "Http";

const Edit = () => {
  const {id} = useParams();

  const {response, isLoading: featureLoading} = UseAxios({
    endpoint: `/plans/features`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // Fetch Data - http request
  const {
    response: planDetails,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/plans/${id}`, // setup base URL in UseAxios file.
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
    if (
      response !== null &&
      Array.isArray(response) &&
      planDetails !== null &&
      Array.isArray(planDetails.features)
    ) {
      // setFeatures(response.map((feature) => ({...feature, check: true})));
      if (Array.isArray(features)) {
        const filteredFeatures = response.map((feature) => {
          let temp = {...feature, check: false};

          for (let i = 0; i < planDetails.features.length; i++) {
            if (feature.id === planDetails.features[i].id) {
              temp.check = true;
              break;
            }
          }

          return temp;
        });

        setFeatures(filteredFeatures);
      }
    }
    if (planDetails !== null) {
      setCharges({
        monthlyCharges: planDetails?.monthlyChargesAmount,
        annuallyCharges: planDetails?.annuallyChargesAmount,
        discount: planDetails?.annuallyChargesDiscountPercentage,
      });
      setFeatureChecked(planDetails?.features);
    }
  }, [response, planDetails]);

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

  const handleUpdatePlan = (values) => {
    let filteredFeatures = features.filter((feature) => feature.check);

    const formData = {
      planName: values.planName,
      monthlyCharges: charges?.monthlyCharges,
      yearlyCharges: charges?.annuallyCharges,
      yearlyChargesDiscountPercentage: values.yearlyChargesDiscountPercentage,
      numberOfUsers: values.numberOfUsers,
      databaseSize: values.databaseSize,
      discountPercentage: charges?.discount,
      features: filteredFeatures.map((feature) => {
        let temp = feature;
        delete temp.check;
        return temp;
      }),
    };

    Http.put(`/plans/${planDetails.id}`, formData)
      .then((res) => {
        message.success("Plan Updated successfully");
      })
      .catch((err) => {
        Object.keys(err.response.data).forEach((element) => {
          message.error(err.response.data[element][0]);
        });
      });
  };

  return (
    <Layout currentPage={5} title='User Management'>
      <div className='main-wrapper'>
        {
          // breadcrumbs
        }
        <Card loading={isLoading}>
          <Form
            layout='vertical'
            onFinish={handleUpdatePlan}
            initialValues={planDetails}
          >
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
                <PLanDetail charges={charges} handleCharges={handleCharges} />
                {
                  // vertical divider
                }
                <div className='vertical-divider' />

                {
                  // all features
                }
                <AllFeatures features={features} setFeatures={setFeatures} />
              </div>
              <div className='d-flex justify-content-end align-items-center mt-16'>
                <Link to='/settings/all-plans'>
                  <Button className='default-button btn-role mr-16'>
                    Cancel
                  </Button>
                </Link>
                <Button htmlType='submit' className='primary-button  btn-role'>
                  Update Plan
                </Button>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default Edit;
