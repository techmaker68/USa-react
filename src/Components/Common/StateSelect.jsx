import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Select} from "antd";

const {Option} = Select;

const StateSelect = () => {
  return (
    <>
      <Select
        dropdownMatchSelectWidth={false}
        className='primary-select-option'
        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
      >
        <Option value='0'>State 1</Option>
      </Select>
    </>
  );
};

export default StateSelect;
