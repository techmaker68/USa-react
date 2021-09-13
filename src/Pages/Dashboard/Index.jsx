import Layout from "../../Layout/Index.jsx";
import {DatePicker, Button} from "antd";
import DateIcon from "Assets/icons/datepicker.svg";
import Separator from "Assets/icons/seperator.svg";
import Print from "Assets/icons/print.svg";

const {RangePicker} = DatePicker;

const Index = () => {
  return (
    <Layout title='Dashboard' currentPage={0}>
      <div className='main-wrapper dashboard-wrapper'>
        {
          // top action
        }
        <div className='d-flex justify-content-between mb-29'>
          <RangePicker
            className='primary-range-picker'
            separator={<img width={70} src={Separator} alt='' />}
            suffixIcon={<img src={DateIcon} alt='' />}
            clearIcon={false}
          />
          <div>
            <Button className='default-button btn-print'>
              <img src={Print} alt='' /> Print
            </Button>
          </div>
        </div>
        {
          // cards
        }

        <div className='row'>
          <div className='col-3'>
            <div className='stats-card'>
              <h1>Revenue Overview</h1>
              <div className='f-24 fw-700 mb-30 text-center'>$ 4,500.00</div>
              <p>
                <span className='color-success'>10 % </span> Increase from
                previous month
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className='stats-card'>
              <h1>New Customers</h1>
              <div className='f-24 fw-700 mb-30 text-center'>40 %</div>
              <p>
                <span className='color-success'>10 % </span> Increase from
                previous month
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className='stats-card'>
              <h1>Conversion Rate</h1>
              <div className='f-24 fw-700 mb-30 text-center'>20 %</div>
              <p>
                <span className='color-success'>10 % </span> Increase from
                previous month
              </p>
            </div>
          </div>
          {
            //speed-o meter
          }
          <div className='col-3'>
            <div className='stats-card'>
              <div className='d-flex justify-content-between'>
                <h1>Sales Target</h1>
                <u className='f-12 color-primary fw-500'>Set target</u>
              </div>
            </div>
          </div>
        </div>
        {
          // monthly sales line chart
        }
        <div className='line-chart-wrapper'>
          <h1>Monthly Sales Overview</h1>
        </div>
        {
          // heat-map - rates
        }
        <div className='row mt-22'>
          <div className='col-3'>
            <div className='heat-map-wrapper'></div>
          </div>
          <div className='col-3'>
            <div className='heat-map-wrapper'></div>
          </div>

          <div className='col-6'>
            <div className='row '>
              {
                // churn rate
              }
              <div className='col-6'>
                <div className='rate-wrapper'>
                  <div className='rate-wrapper__header'>Churn Rate</div>
                </div>
              </div>
              <div className='col-6'>
                <div className='rate-wrapper'>
                  <div className='rate-wrapper__header'>Customers Feedback</div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='customer-overview'>
                  <div className='customer-overview__header'>
                    Top 5 Customers Overview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // cities
        }
        <div className='cities-wrapper'>
          <div className='cities-wrapper__header'>
            List Of Cities Purchasing Product
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
