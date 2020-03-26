import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import SelectCatagory from "../fragments/SelectCatagory";
import { DatePicker } from "antd";

interface Props {
  setDate: any;
  setCatagory: any;
}

const SettingPost: React.FC<Props> = ({ setDate, setCatagory }) => {
  const handleDateChange = (date: any, dateString: string) => {
    setDate(dateString);
  };
  return (
    <>
      <WriteBtn name="등록하기" />
      <SelectCatagory setCatagory={setCatagory} />
      <DatePicker onChange={handleDateChange} />
    </>
  );
};
export default SettingPost;
