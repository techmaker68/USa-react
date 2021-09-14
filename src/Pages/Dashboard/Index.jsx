import Layout from "Layout/Index.jsx";
import {DatePicker, Button, Dropdown, Menu} from "antd";
import DateIcon from "Assets/icons/datepicker.svg";
import Separator from "Assets/icons/seperator.svg";
import Print from "Assets/icons/print.svg";
import ArrowGraphIcon from "Assets/icons/arrowGraph.svg";
import SpeedoMeter from "Components/Dashboard/SpeedoMeter.jsx";
import LineSalesChart from "Components/Dashboard/LineSalesChart";
import ERPHeatMap from "Components/Dashboard/ERPHeatMap";
import TicketHeatMap from "Components/Dashboard/TicketHeatMap";
import CustomerOverview from "Components/Dashboard/CustomerOverview";
import PurchasingProduct from "Components/Dashboard/PurchasingProduct";
import ArrowDown from "Assets/icons/arrowDownDarkBlue.svg";

const {RangePicker} = DatePicker;

const Index = () => {
  const menu = (
    <Menu>
      <Menu.Item key='1'>PDF</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2'>CSV</Menu.Item>
    </Menu>
  );
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
          <div className='d-flex align-items-center'>
            <Button className='default-button btn-print mr-16'>
              <img src={Print} alt='' /> Print
            </Button>

            <Dropdown overlay={menu} trigger={["click"]}>
              <Button className='default-button btn-print'>
                <span className='color-primary'>Export</span>
                <img className='ml-10' src={ArrowDown} alt='' />
              </Button>
            </Dropdown>
          </div>
        </div>
        {
          // cards
        }

        <div className='row'>
          <div className='col-3'>
            <div className='stats-card'>
              <h1>Revenue Overview</h1>
              <div className='f-24 fw-700 mb-30 text-center'>
                <img className='icon-graph' src={ArrowGraphIcon} alt='' /> $
                4,500.00
              </div>
              <p>
                <span className='color-success'>10 % </span> Increase from
                previous month
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className='stats-card'>
              <h1>New Customers</h1>
              <div className='f-24 fw-700 mb-30 text-center'>
                <img className='icon-graph' src={ArrowGraphIcon} alt='' /> 40 %
              </div>
              <p>
                <span className='color-success'>10 % </span> Increase from
                previous month
              </p>
            </div>
          </div>
          <div className='col-3'>
            <div className='stats-card'>
              <h1>Conversion Rate</h1>
              <div className='f-24 fw-700 mb-30 text-center'>
                <img className='icon-graph' src={ArrowGraphIcon} alt='' />
                20 %
              </div>
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
            <SpeedoMeter />
          </div>
        </div>
        {
          // monthly sales line chart
        }
        <div className='line-chart-wrapper'>
          <LineSalesChart />
        </div>
        {
          // heat-map - rates
        }
        <div className='row mt-22'>
          <div className='col-3'>
            <div className='heat-map-wrapper'>
              <ERPHeatMap />
            </div>
          </div>
          <div className='col-3'>
            <div className='heat-map-wrapper'>
              <TicketHeatMap />
            </div>
          </div>

          <div className='col-6'>
            <div className='row '>
              {
                // churn rate
              }
              <div className='col-6'>
                <div className='rate-wrapper'>
                  <div className='rate-wrapper__header'>Churn Rate</div>
                  <h1>90 %</h1>
                  <p>
                    <span className='color-success'>
                      <img className='icon-graph' src={ArrowGraphIcon} alt='' />
                      10 %
                    </span>
                    Increase from previous month
                  </p>
                </div>
              </div>
              <div className='col-6'>
                <div className='rate-wrapper'>
                  <div className='rate-wrapper__header'>Customers Feedback</div>
                  <h1>90 %</h1>
                  <p>
                    <span className='color-success'>
                      <img className='icon-graph' src={ArrowGraphIcon} alt='' />
                      10 %
                    </span>
                    Increase from previous month
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='customer-overview'>
                  <CustomerOverview />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // cities
        }
        <div className='cities-wrapper'>
          <PurchasingProduct />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
