import React from "react";
import { getPostList } from "../../firebase";
import { ContentContext } from "../../store/readPost";
import { Content } from "../shared/interface";
import ListPost from "../fragments/ListPost";
import IntroImg from "../fragments/IntroImg";
import styled from "styled-components";

interface Props {}
const HomeWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home: React.FC<Props> = ({}) => {
  const {
    postContent: [postContent, setPostContent]
  } = React.useContext(ContentContext);
  const catagory = "blog";
  React.useEffect(() => {
    getPostList(catagory, setPostContent);
  }, []);
  console.log(postContent);

  return (
    <>
      <HomeWapper>
        <IntroImg />
        <ListPost postContent={postContent} />
      </HomeWapper>
    </>
  );
};
export default Home;
