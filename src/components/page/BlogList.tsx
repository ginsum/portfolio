import React from "react";
import { ContentContext } from "../../store/readPost";
import { getPostList } from "../../firebase/content";
import { Content } from "../shared/interface";
import { Typography, List } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  padding-bottom: 80px;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
`;

const BlogPostWapper = styled.div`
  padding: 2px 20px;
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
    postContent: [postContent, setPostContent],
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
    const preListreverse = preList.reverse();
    const list = preListreverse.map((post: any) => {
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
        date: content[0].date,
      };
    });

    return (
      <>
        {postContent.length ? (
          <List
            itemLayout="horizontal"
            dataSource={list}
            style={{ marginBottom: "40px" }}
            renderItem={(item: any) => (
              <Link to={`/blog/${item.postId}`}>
                <BlogPostWapper>
                  <List.Item>
                    <List.Item.Meta title={item.title} />
                    <div>{item.date}</div>
                  </List.Item>
                </BlogPostWapper>
              </Link>
            )}
          />
        ) : (
          <LoadingIndicator />
        )}
      </>
    );
  };

  return (
    <>
      <BlogListWapper>
        <BlogContentWapper>
          <Title>BLOG</Title>
          <Text style={{ marginBottom: 30 }}>Study</Text>
          <Text code style={{ margin: 20, fontSize: "18px" }}>
            immersive
          </Text>
          {filterCatagory("immersive")}
          <Text code style={{ margin: 20, fontSize: "18px" }}>
            pre-course
          </Text>
          {filterCatagory("precourse")}

          {/* <Text code style={{ margin: 20, fontSize: "18px" }}>
            blog
          </Text>
          {filterCatagory("blog")} */}
        </BlogContentWapper>
      </BlogListWapper>
    </>
  );
};
export default BlogList;
