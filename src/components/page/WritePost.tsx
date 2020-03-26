import React from "react";
import SettingPost from "../fragments/SettingPost";
import TitleInput from "../fragments/TitleInput";
import ContentInput from "../fragments/ContentInput";
import { PostContext } from "../../store/writePost";

interface Props {}

const WritePost: React.FC<Props> = ({}) => {
  const {
    title: [title, setTitle],
    content: [content, setContent],
    date: [date, setDate],
    catagory: [catagory, setCatagory]
  } = React.useContext(PostContext);
  return (
    <>
      <SettingPost setDate={setDate} setCatagory={setCatagory}></SettingPost>
      <TitleInput title={title} setTitle={setTitle}></TitleInput>
      <ContentInput content={content} setContent={setContent}></ContentInput>
    </>
  );
};
export default WritePost;
