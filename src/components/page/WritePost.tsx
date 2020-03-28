import React from "react";
import SettingPost from "../fragments/SettingPost";
import TitleInput from "../fragments/TitleInput";
import ContentInput from "../fragments/ContentInput";
import { PostContext } from "../../store/writePost";
import { UserContext } from "../../store/auth";
import { RouteComponentProps } from "react-router-dom";
import { handleNewPost } from "../../firebase";
import styled from "styled-components";

const WriteWapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
`;

const WriteContentWapper = styled.div`
  max-width: ${p => p.theme.max_width};
  margin-top: 60px;
  padding: ${props => props.theme.padding_content};
  width: 100%;
`;

interface Props extends RouteComponentProps<any> {}

const WritePost: React.FC<Props> = ({ history, match }) => {
  const {
    title: [title, setTitle],
    content: [content, setContent],
    date: [date, setDate],
    catagory: [catagory, setCatagory],
    hiddenBtn: [hiddenBtn, setHiddenBtn]
  } = React.useContext(PostContext);
  const {
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);

  const handlePushToReset = () => {
    setHiddenBtn(true);
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
      handleNewPost(userInfo["id"], newPost, handlePushToReset, postId);
    }
  };
  return (
    <>
      <WriteWapper>
        <WriteContentWapper>
          <SettingPost
            setDate={setDate}
            setCatagory={setCatagory}
            submitNewPost={submitNewPost}
          ></SettingPost>
          <TitleInput title={title} setTitle={setTitle}></TitleInput>
          <ContentInput
            content={content}
            setContent={setContent}
          ></ContentInput>
        </WriteContentWapper>
      </WriteWapper>
    </>
  );
};
export default WritePost;
