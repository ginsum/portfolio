import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import SelectCatagory from "../fragments/SelectCatagory";
import { DatePicker } from "antd";
import styled from "styled-components";

const SettingWapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

interface Props {
  setDate: any;
  setCatagory: any;
  submitNewPost: any;
}

const SettingPost: React.FC<Props> = ({
  setDate,
  setCatagory,
  submitNewPost
}) => {
  const handleDateChange = (date: any, dateString: string) => {
    setDate(dateString);
  };
  return (
    <>
      <SettingWapper>
        <SelectCatagory setCatagory={setCatagory} />
        <DatePicker
          style={{ width: 120, marginRight: 5 }}
          onChange={handleDateChange}
        />
        <WriteBtn name="등록하기" submit={submitNewPost} />
      </SettingWapper>
    </>
  );
};
export default SettingPost;
