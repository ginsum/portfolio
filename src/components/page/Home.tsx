import React from "react";
import { getPostList } from "../../firebase/content";
import { ContentContext } from "../../store/readPost";
import ListPost from "../fragments/ListPost";
import IntroImg from "../fragments/IntroImg";
import styled from "styled-components";
import SkillCard from "../fragments/SkillCard";
import ProjectList from "../fragments/ProjectList";

interface Props {}
const HomeWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.div`
  padding-top: 30px;
  padding-left: ${props => props.theme.padding_content};
  padding-right: ${props => props.theme.padding_content};
  display: flex;
  font-size: 20px;
  color: #ddd;
  justify-content: center;
`;

const Home: React.FC<Props> = ({}) => {
  const {
    postContent: [postContent, setPostContent],
    projectContent: [projectContent, setProjectContent]
  } = React.useContext(ContentContext);
  React.useEffect(() => {
    getPostList("blog", setPostContent);
    getPostList("project", setProjectContent);
  }, []);

  return (
    <>
      <HomeWapper>
        <IntroImg />
        <MainTitle>JUNG HK</MainTitle>
        <SkillCard />
        <MainTitle>PROJECT</MainTitle>
        <ProjectList projectContent={projectContent} />
        <MainTitle>BLOG</MainTitle>
        <ListPost postContent={postContent} />
      </HomeWapper>
    </>
  );
};
export default Home;
