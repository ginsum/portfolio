import React from "react";
import { ContentContext } from "../../store/readPost";
import { getPostList } from "../../firebase/content";
import { Content } from "../shared/interface";
import { List, Avatar, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
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
    postContent: [projectContent, setProjectContent]
  } = React.useContext(ContentContext);
  React.useEffect(() => {
    getPostList("project", setProjectContent);
  }, []);
  const list: ListItem[] = projectContent.map((post: any) => {
    const postId: string[] = Object.keys(post);
    const content: Content[] = Object.values(post);
    const desc: string = content[0].content.replace(
      /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
      ""
    );
    const descSlice: string = desc.substring(0, 90);
    return {
      title: content[0].title,
      description: descSlice,
      postId: postId[0],
      date: content[0].date
    };
  });

  return (
    <>
      <BlogListWapper>
        <BlogContentWapper>
          <Title>PROJECT</Title>
          <Text style={{ marginBottom: 20 }}>프로젝트 목록</Text>
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={
                    <Link to={`/project/${item.postId}`}>{item.title}</Link>
                  }
                  description={item.description}
                />
                <div>{item.date}</div>
              </List.Item>
            )}
          />
        </BlogContentWapper>
      </BlogListWapper>
    </>
  );
};
export default ProjectListPage;
