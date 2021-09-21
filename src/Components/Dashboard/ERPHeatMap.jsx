import SelectArrowDownIcon from "Assets/icons/arrowDownBlue.svg";
import {Select} from "antd";
import PieMap from "./PieMap";

const {Option} = Select;

const ERPHeatMap = () => {
  return (
    <>
      <div className='heat-map-wrapper__header'>
        <h1>Heat Map</h1>
        {
          // header
        }
        <div>
          <Select
            dropdownMatchSelectWidth={false}
            defaultValue={0}
            className='dashboard-select-option'
            suffixIcon={
              <img
                className='select-down-icon'
                src={SelectArrowDownIcon}
                alt=''
              />
            }
          >
            <Option value={0}>All</Option>
          </Select>
        </div>
      </div>
      {
        // heat map
      }
      <div className='map-wrapper position-relative'>
        <PieMap />
      </div>
      {
        //conte-header
      }
      <div className='content-header'>
        <div>
          <p>Most Used Feature</p>
          <p className='color-primary'>Power BI</p>
        </div>
        <div>
          <p>Least Used Feature</p>
          <p className='color-primary'>Zakat Management</p>
        </div>
      </div>
      {
        //conte-header
      }
      <div className='heat-map-content'>
        <div>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Dashboard (30%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Purchases (10%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Reports (10%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Accounts (10%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Settings (10%)
          </p>
        </div>
        <div>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Sales (20%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Inventory (10%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Returns (10%)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Employee (10%)
          </p>
        </div>
      </div>
    </>
  );
};

export default ERPHeatMap;
