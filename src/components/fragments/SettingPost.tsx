import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import SelectCatagory from "../fragments/SelectCatagory";
import SelectSection from "../fragments/SelectSection";
import { DatePicker, Button, Modal, Input } from "antd";
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
  setCover: any;
  setSection: any;
}

const SettingPost: React.FC<Props> = ({
  setDate,
  setCatagory,
  submitNewPost,
  setCover,
  setSection
}) => {
  const [coverModal, setCoverModal] = React.useState(false);
  const [coverUrl, setCoverUrl] = React.useState("");
  const handleDateChange = (date: any, dateString: string) => {
    setDate(dateString);
  };
  const handleModalVisible = () => {
    setCoverModal(!coverModal);
  };
  const handleCoverUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoverUrl(e.target.value);
  };
  const handleCoverSubmit = () => {
    setCover(coverUrl);
  };
  return (
    <>
      <SettingWapper>
        <SelectSection setSection={setSection} />
        <Button style={{ marginRight: 5 }} onClick={handleModalVisible}>
          Add Cover
        </Button>
        <Modal
          visible={coverModal}
          onOk={handleCoverSubmit}
          onCancel={handleModalVisible}
        >
          <Input
            placeholder="Add cover URL"
            allowClear
            onChange={handleCoverUrlChange}
          ></Input>
        </Modal>
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
