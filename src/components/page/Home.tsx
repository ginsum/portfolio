import React from "react";
import { getPostList } from "../../firebase/content";
import { ContentContext } from "../../store/readPost";
import ListPost from "../fragments/ListPost";
import IntroImg from "../fragments/IntroImg";
import styled from "styled-components";
import SkillCard from "../fragments/SkillCard";
import ProjectList from "../fragments/ProjectList";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";

const HomeWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  max-width: ${p => p.theme.max_width};
  padding-left: ${props => props.theme.padding_content};
  padding-right: ${props => props.theme.padding_content};
  border-bottom: 1px solid #ddd;
`;

interface Props {}

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
        {/* <MainTitle>JUNG HK</MainTitle> */}
        <SkillCard />
        <MainTitle>
          <PageHeader
            title="Project"
            extra={[<Link to="/projectlist">see more</Link>]}
          />
        </MainTitle>
        <ProjectList projectContent={projectContent} />
        <MainTitle>
          <PageHeader
            title="Blog"
            extra={[<Link to="/bloglist">see more</Link>]}
          />
        </MainTitle>
        <ListPost postContent={postContent} />
      </HomeWapper>
    </>
  );
};
export default Home;
