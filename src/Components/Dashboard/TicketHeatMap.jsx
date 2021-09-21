import SelectArrowDownIcon from "Assets/icons/arrowDownBlue.svg";
import {Select} from "antd";
import PieMap from "./PieMap";

const {Option} = Select;

const TicketHeatMap = () => {
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
      <div className='heat-map-content'>
        <div>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            New (10)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            In Progress (05)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Customer Team Resolved (05)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Technical Tea, Resolved (05)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Waiting for Customer (10)
          </p>
        </div>
        <div>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Reopen (10)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Executions (20)
          </p>
          <p>
            <span
              className='d-inline-block color-bar'
              style={{backgroundColor: "#FF6767"}}
            />
            Closed (05)
          </p>
        </div>
      </div>
    </>
  );
};

export default TicketHeatMap;
