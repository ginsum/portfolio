import React from "react";
import SettingPost from "../fragments/SettingPost";
import TitleInput from "../fragments/TitleInput";
import ContentInput from "../fragments/ContentInput";

interface Props {}

const WritePost: React.FC<Props> = ({}) => {
  return (
    <>
      <SettingPost></SettingPost>
      <TitleInput></TitleInput>
      <ContentInput></ContentInput>
    </>
  );
};
export default WritePost;
