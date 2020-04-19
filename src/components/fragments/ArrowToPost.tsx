import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";

const ArrowWapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  flex-direction: row;
  justify-content: space-between;
`;

interface Props {
  contentList: any;
  index: number;
  section: string;
}

const ArrowToPost: React.FC<Props> = ({ contentList, index, section }) => {
  const previous = contentList[index - 1];
  const next = contentList[index + 1];
  const handlePostLink = (post: any) => {
    for (let key in post) {
      return key;
    }
  };

  return (
    <>
      <ArrowWapper>
        {handlePostLink(previous) ? (
          <Link to={`/${section}/${handlePostLink(previous)}`}>
            <Button>pre</Button>
          </Link>
        ) : (
          <Button disabled>pre</Button>
        )}
        {handlePostLink(next) ? (
          <Link to={`/${section}/${handlePostLink(next)}`}>
            <Button>next</Button>
          </Link>
        ) : (
          <Button disabled>next</Button>
        )}
      </ArrowWapper>
    </>
  );
};
export default ArrowToPost;
