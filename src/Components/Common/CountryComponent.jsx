import React, {useMemo, useState} from "react";
import {Select} from "antd";
import countryList from "react-select-country-list";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";

const CountryComponent = ({setValueHandler, ...rest}) => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    console.log("value", countryList());
    setValue(value);
    if (setValueHandler) {
      setValueHandler(value);
    }
  };
  return (
    <Select
      dropdownMatchSelectWidth={false}
      className='primary-select-option country-list-dropdown'
      suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
      value={value}
      onChange={changeHandler}
      {...rest}
    >
      {options.map((country, key) => {
        return (
          <Select.Option value={country.label} key={key}>
            {country.label}
          </Select.Option>
        );
      })}
    </Select>
  );
};
export default CountryComponent;
