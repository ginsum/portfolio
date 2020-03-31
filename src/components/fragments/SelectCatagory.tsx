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
        style={{ width: 120, marginRight: 5 }}
        placeholder="catagory"
        onChange={setCatagory}
      >
        <Option value="precourse">Pre-course</Option>
        <Option value="immersive">Immersive</Option>
      </Select>
    </>
  );
};
export default SelectCatagory;
