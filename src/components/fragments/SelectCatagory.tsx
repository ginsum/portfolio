import React from "react";
import { Select } from "antd";

const { Option } = Select;
interface Props {
  setCatagory: any;
}

const SelectCatagory: React.FC<Props> = ({ setCatagory }) => {
  return (
    <>
      <Select
        style={{ width: 120 }}
        placeholder="catagory"
        onChange={setCatagory}
      >
        <Option value="lucy">Lucy</Option>
      </Select>
    </>
  );
};
export default SelectCatagory;
