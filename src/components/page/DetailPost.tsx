import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import TitleArea from "../fragments/TitleArea";
import ContentArea from "../fragments/ContentArea";
import ArrowToPost from "../fragments/ArrowToPost";
import { ContentContext } from "../../store/readPost";
import { getPostContentById, getPostList } from "../../firebase/content";
import { Content } from "../shared/interface";
import { Breadcrumb } from "antd";
import styled from "styled-components";
import LoadingIndicator from "../fragments/LoadingIndicator";

const PostWapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
`;

const PostContentWapper = styled.div`
  display: flex;
  max-width: ${(p) => p.theme.max_width};
  padding: 40px;
  width: 100%;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

interface Props extends RouteComponentProps<any> {}

const DetailPost: React.FC<Props> = ({ match, history }) => {
  const {
    postContent: [postContentList, setPostContentList],
  } = React.useContext(ContentContext);

  const [contentDetail, setContentDetail] = React.useState<Content | null>(
    null
  );

  const section: string = match.url.split("/")[1];
  const postId: string = match.url.split("/")[2];

  React.useEffect(() => {
    getPostList(section, setPostContentList);
    getPostContentById(section, postId, setContentDetail);
  }, [postId, section, setPostContentList]);

  let preList: any = [];

  if (postContentList) {
    preList = postContentList.filter((post: any) => {
      for (let key in post) {
        if (post[key].catagory === contentDetail?.catagory) {
          return post;
        }
      }
    });
  }
  const handlePostIndex = (preList: any) => {
    let postIndex: number = 0;
    preList.forEach((post: any, index: number) => {
      for (let key in post) {
        if (key === postId) {
          postIndex = index;
        }
      }
    });
    return postIndex;
  };

  const currIndex = handlePostIndex(preList);

  const handlePushToReset = () => {
    history.push("/");
  };
  const handlePushToSignin = () => {
    history.push("/signin");
  };

  const handlePushToEdit = (catagory: string, postId: string) => {
    history.push(`/editpost/${catagory}/${postId}`);
  };
  return (
    <PostWapper>
      {postContentList ? (
        <PostContentWapper>
          <Breadcrumb style={{ marginBottom: 10 }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/${section}list`}>{section}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <TitleArea
            content={contentDetail}
            postId={postId}
            handlePushToReset={handlePushToReset}
            handlePushToSignin={handlePushToSignin}
            handlePushToEdit={handlePushToEdit}
          />
          <ContentArea content={contentDetail} />
          <ArrowToPost
            contentList={preList}
            index={currIndex}
            section={section}
          />
        </PostContentWapper>
      ) : (
        <LoadingIndicator />
      )}
    </PostWapper>
  );
};
export default DetailPost;
