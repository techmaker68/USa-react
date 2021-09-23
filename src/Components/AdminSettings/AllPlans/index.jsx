import PlanEditIcon from "Assets/icons/plantEditIcon.svg";
import CheckStroke from "Assets/icons/checkStroke.svg";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "antd";
import PlusIcon from "Assets/icons/plus.svg";

const Index = () => {
  const [data, setData] = useState([
    {
      id: 0,
      title: "Starter",
      monthlyCharges: 20,
      YearlyCharges: 200,
      noOfUsers: 20,
      database: 10,
      discount: 10,
      vat: 15,
      features: ["30 Day Support", "2 GB Storage", "2 GB Storage"],
    },
    {
      id: 1,
      title: "Business",
      monthlyCharges: 20,
      YearlyCharges: 200,
      noOfUsers: 20,
      database: 10,
      discount: 10,
      vat: 15,
      features: ["30 Day Support", "2 GB Storage"],
    },
    {
      id: 2,
      title: "Enterprise",
      monthlyCharges: 20,
      YearlyCharges: 200,
      noOfUsers: 20,
      database: 10,
      discount: 10,
      vat: 15,
      features: ["30 Day Support", "2 GB Storage"],
    },
  ]);

  return (
    <div className='all-plan-wrapper'>
      <div className='d-flex justify-content-end mb-12 mt-5-px'>
        <Link to={`/settings/plan/create`}>
          <Button className='primary-button'>
            <img className='button-plus-icon' src={PlusIcon} alt='' /> Create
            Plan
          </Button>
        </Link>
      </div>
      <div className='page-card'>
        <h1 className='f-16 fw-600'>All Plans</h1>
        {
          // heading
        }
        <p className='color-gray f-16'>
          Currently you have created
          {data?.length > 1 ? (
            <>
              <span className='color-primary fw-600 mx-1'>{data?.length}</span>
              Plans.
            </>
          ) : (
            <>
              <span className='color-primary fw-600 mx-1'>{data?.length}</span>
              Plan.
            </>
          )}
        </p>
        {
          // cards
        }
        <div className='card-wrapper'>
          {Array.isArray(data) &&
            data?.map((card, index) => (
              <div className='plan-card'>
                <div className='plan-card__header'>
                  <div className='f-20 fw-600'>{card?.title}</div>
                  <Link to={`/settings/plan/update/${card?.id}`}>
                    <img
                      className='cursor-pointer'
                      src={PlanEditIcon}
                      alt='edit'
                    />
                  </Link>
                </div>
                <div className='plan-card__content'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <div className='fw-300'>Monthly Charges</div>
                      <div className='fw-600 mb-16'>
                        {card?.monthlyCharges} SAR
                      </div>
                      <div className='fw-300'>No of Users</div>
                      <div className='fw-600 mb-16'>{card?.noOfUsers}</div>
                      <div className='fw-300'>Discount</div>
                      <div className='fw-600 mb-16'>{card?.discount} %</div>
                    </div>
                    <div>
                      <div className='fw-300'>Yearly Charges</div>
                      <div className='fw-600 mb-16'>
                        {card?.YearlyCharges} SAR
                        <span className='f-12 fw-600 color-primary ml-8'>
                          (10% Off)
                        </span>
                      </div>
                      <div className='fw-300'>Database</div>
                      <div className='fw-600 mb-16'>{card?.database} GB</div>
                      <div className='fw-300'>VAT %</div>
                      <div className='fw-600 mb-16'>{card?.vat} %</div>
                    </div>
                  </div>
                  {
                    // features
                  }
                  <div className='mt-4-px'>
                    <h1 className='f-16 fw-600 mb-16'>Features</h1>
                    {Array.isArray(card?.features) &&
                      card?.features?.map((feature, index) => (
                        <div key={feature} className='feature-wrapper'>
                          <img src={CheckStroke} alt='' />
                          <span className='align-middle ml-4-px'>
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
