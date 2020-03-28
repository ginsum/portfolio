import React from "react";
import styled from "styled-components";

const PostWapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const PostContentWapper = styled.div`
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
  width: 100%;
`;

interface Props {
  content: any;
}

const TitleArea: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content ? (
        <>
          <PostWapper>
            <PostContentWapper>
              <h1 style={{ fontSize: "200px" }}>{content.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
            </PostContentWapper>
          </PostWapper>
        </>
      ) : null}
    </>
  );
};
export default TitleArea;
