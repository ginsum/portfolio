import React from "react";
import { ContentContext } from "../../store/readPost";
import { getPostList } from "../../firebase/content";
import ProjectList from "../fragments/ProjectList";
import { Typography } from "antd";
import styled from "styled-components";
import LoadingIndicator from "../fragments/LoadingIndicator";

const { Title, Text } = Typography;

const BlogListWapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
`;

const BlogContentWapper = styled.div`
  display: flex;
  max-width: ${(p) => p.theme.max_width};
  padding: 40px;
  width: 100%;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
`;
interface ListItem {
  title: string;
  description: string;
  postId: string;
  date: string;
}

interface Props {}

const ProjectListPage: React.FC<Props> = ({}) => {
  const {
    postContent: [projectContent, setProjectContent],
  } = React.useContext(ContentContext);
  React.useEffect(() => {
    getPostList("project", setProjectContent);
  }, []);
  return (
    <>
      <BlogListWapper>
        <BlogContentWapper>
          <Title>PROJECT</Title>
          <Text style={{ marginBottom: 20 }}>프로젝트 목록</Text>
          {projectContent.length ? (
            <ProjectList projectContent={projectContent} />
          ) : (
            <LoadingIndicator />
          )}
        </BlogContentWapper>
      </BlogListWapper>
    </>
  );
};
export default ProjectListPage;
