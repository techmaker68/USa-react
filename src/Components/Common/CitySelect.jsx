import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Select, Form} from "antd";

const {Option} = Select;

const CitySelect = ({name}) => {
  return (
    <Form.Item label='City' name={name}>
      <Select
        dropdownMatchSelectWidth={false}
        className='primary-select-option'
        suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
      >
        <Option value='CityCity 1'>CityCity 1</Option>
      </Select>
    </Form.Item>
  );
};

export default CitySelect;
