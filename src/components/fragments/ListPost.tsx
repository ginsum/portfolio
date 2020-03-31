import React from "react";
import { Content } from "../shared/interface";
import styled from "styled-components";
import PostCard from "./PostCard";

const ListWapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: center;
`;

const ListCardWapper = styled.div`
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

interface Props {
  postContent: Content[];
}

const ListPost: React.FC<Props> = ({ postContent }) => {
  const list = postContent.map((post: any) => {
    const postId: string[] = Object.keys(post);
    const content: Content[] = Object.values(post);
    return (
      <PostCard key={postId[0]} id={postId[0]} content={content}></PostCard>
    );
  });
  return (
    <>
      <ListWapper>
        <ListCardWapper>{list}</ListCardWapper>
      </ListWapper>
    </>
  );
};
export default ListPost;
