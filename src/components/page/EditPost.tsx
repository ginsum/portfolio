import React from "react";
import SettingPost from "../fragments/SettingPost";
import TitleInput from "../fragments/TitleInput";
import ContentInput from "../fragments/ContentInput";
import { PostContext } from "../../store/writePost";
import { UserContext } from "../../store/auth";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { Content } from "../shared/interface";
import {
  getPostContentById,
  updatePostContentById
} from "../../firebase/content";

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

const EditPost: React.FC<Props> = ({ history, match }) => {
  const [contentDetail, setContentDetail] = React.useState<Content>({
    title: "",
    content: "",
    date: "",
    catagory: "",
    section: "",
    cover: "",
    user: { email: "", id: "", photoUrl: "", userName: "" }
  });
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [catagory, setCatagory] = React.useState<string>("");
  const [section, setSection] = React.useState<string>("");
  const [cover, setCover] = React.useState<string>("");
  const [hiddenBtn, setHiddenBtn] = React.useState(true);

  const sectionName = match.url.split("/")[2];
  const postId = match.url.split("/")[3];

  React.useEffect(() => {
    getPostContentById(sectionName, postId, setContentDetail);
  }, []);

  React.useEffect(() => {
    setTitle(contentDetail?.title);
    setContent(contentDetail?.content);
    setDate(contentDetail?.date);
    setCatagory(contentDetail?.catagory);
    setSection(contentDetail?.section);
    setCover(contentDetail?.cover);
  }, [contentDetail]);

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
      if (section === "") {
        alert("카테고리를 선택해주세요");
      }
      const newPost = {
        title: title,
        content: content,
        date: date,
        catagory: catagory,
        user: userInfo,
        section: section,
        cover: cover
      };
      updatePostContentById(sectionName, postId, newPost, handlePushToReset);
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
            setCover={setCover}
            setSection={setSection}
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
export default EditPost;
