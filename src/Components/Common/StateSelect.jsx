import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Select, Form} from "antd";

const {Option} = Select;

const StateSelect = ({name}) => {
  return (
    <Form.Item label='State' name={name}>
      <Select
        dropdownMatchSelectWidth={false}
        className='primary-select-option'
        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
      >
        <Option value='0'>State 1</Option>
      </Select>
    </Form.Item>
  );
};

export default StateSelect;
