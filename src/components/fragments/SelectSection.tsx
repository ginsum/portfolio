import React from "react";
import { Select } from "antd";

const { Option } = Select;
interface Props {
  setSection: any;
}

const SelectSection: React.FC<Props> = ({ setSection }) => {
  return (
    <>
      <Select
        style={{ width: 120, marginRight: 5 }}
        placeholder="section"
        onChange={setSection}
      >
        <Option value="blog">BLOG</Option>
        <Option value="project">PROJECT</Option>
        <Option value="info">INFO</Option>
      </Select>
    </>
  );
};
export default SelectSection;
