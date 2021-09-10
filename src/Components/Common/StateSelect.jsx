import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Select} from "antd";

const {Option} = Select;

const StateSelect = () => {
  return (
    <>
      <Select
        className='primary-select-option'
        suffixIcon={<img src={SelectArrowDownIcon} />}
      >
        <Option value='0'>State 1</Option>
      </Select>
    </>
  );
};

export default StateSelect;
