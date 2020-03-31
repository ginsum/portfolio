import React from "react";
import { ContentContext } from "../../store/readPost";
import { getPostList } from "../../firebase/content";
import { Content } from "../shared/interface";
import { Typography, PageHeader } from "antd";
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
  padding-bottom: 80px;
  width: 100%;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
`;

const BlogPostWapper = styled.div`
  padding: 6px 0;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: rgb(207, 240, 218, 0.3);
  }
  transition: background-color 0.6s linear;
`;

interface ListItem {
  title: string;
  description: string;
  postId: string;
  date: string;
}

interface Props {}

const BlogList: React.FC<Props> = ({}) => {
  const {
    postContent: [postContent, setPostContent]
  } = React.useContext(ContentContext);
  React.useEffect(() => {
    getPostList("blog", setPostContent);
  }, []);

  const filterCatagory = (keyword: string) => {
    const preList = postContent.filter((post: any) => {
      for (let key in post) {
        if (post[key].catagory === keyword) {
          return post;
        }
      }
    });
    return preList.map((post: any) => {
      const postId: string[] = Object.keys(post);
      const content: Content[] = Object.values(post);
      const desc: string = content[0].content.replace(
        /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
        ""
      );
      const descSlice: string = desc.substring(0, 90);
      return (
        <BlogPostWapper key={postId[0]}>
          <Link to={`/blog/${postId[0]}`}>
            <PageHeader
              style={{ color: "grey" }}
              title={content[0].title}
              subTitle={descSlice}
              extra={content[0].date}
            />
          </Link>
        </BlogPostWapper>
      );
    });
  };

  return (
    <>
      <BlogListWapper>
        <BlogContentWapper>
          <Title>BLOG</Title>
          <Text style={{ marginBottom: 20 }}>Study</Text>
          <Text style={{ marginBottom: 20 }}>pre-course</Text>
          {filterCatagory("precourse")}
          <Text style={{ marginBottom: 20 }}>immersive</Text>
          {filterCatagory("immersive")}
          <Text style={{ marginBottom: 20 }}>blog</Text>
          {filterCatagory("blog")}
        </BlogContentWapper>
      </BlogListWapper>
    </>
  );
};
export default BlogList;
