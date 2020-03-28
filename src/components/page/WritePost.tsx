import React from "react";
import SettingPost from "../fragments/SettingPost";
import TitleInput from "../fragments/TitleInput";
import ContentInput from "../fragments/ContentInput";
import { PostContext } from "../../store/writePost";
import { UserContext } from "../../store/auth";
import { RouteComponentProps } from "react-router-dom";
import { handleNewPost } from "../../firebase";
import WriteBtn from "../fragments/WriteBtn";

interface Props extends RouteComponentProps<any> {}

const WritePost: React.FC<Props> = ({ history }) => {
  const {
    title: [title, setTitle],
    content: [content, setContent],
    date: [date, setDate],
    catagory: [catagory, setCatagory]
  } = React.useContext(PostContext);
  const {
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);

  const handlePushToReset = () => {
    history.push("/");
  };
  const submitNewPost = () => {
    if (!userInfo) {
      alert("로그인이 필요합니다");
    } else {
      if (title === "") {
        alert("제목을 입력해주세요");
      }
      if (content === "") {
        alert("본문을 입력해주세요");
      }
      if (catagory === "") {
        alert("카테고리를 선택해주세요");
      }
      const newPost = {
        title: title,
        content: content,
        date: date,
        catagory: catagory,
        user: userInfo
      };
      const postId = Date.now().toString();
      console.log(newPost);
      handleNewPost(userInfo["id"], newPost, handlePushToReset, postId);
    }
  };
  return (
    <>
      <WriteBtn name="등록하기" submit={submitNewPost} />
      <SettingPost setDate={setDate} setCatagory={setCatagory}></SettingPost>
      <TitleInput title={title} setTitle={setTitle}></TitleInput>
      <ContentInput content={content} setContent={setContent}></ContentInput>
    </>
  );
};
export default WritePost;
