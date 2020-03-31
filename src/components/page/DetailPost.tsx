import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import TitleArea from "../fragments/TitleArea";
import ContentArea from "../fragments/ContentArea";
import { getPostContentById } from "../../firebase/content";
import { Content } from "../shared/interface";
import { Breadcrumb } from "antd";
import styled from "styled-components";

const PostWapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
`;

const PostContentWapper = styled.div`
  display: flex;
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
  width: 100%;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
`;

interface Props extends RouteComponentProps<any> {}

const DetailPost: React.FC<Props> = ({ match, history }) => {
  const [contentDetail, setContentDetail] = React.useState<Content | null>(
    null
  );

  const section = match.url.split("/")[1];
  const postId = match.url.split("/")[2];

  React.useEffect(() => {
    getPostContentById(section, postId, setContentDetail);
  }, []);

  const handlePushToReset = () => {
    history.push("/");
  };

  return (
    <PostWapper>
      <PostContentWapper>
        <Breadcrumb style={{ marginBottom: 10 }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/bloglist">{section}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <TitleArea
          content={contentDetail}
          postId={postId}
          handlePushToReset={handlePushToReset}
        />
        <ContentArea content={contentDetail} />
      </PostContentWapper>
    </PostWapper>
  );
};
export default DetailPost;
