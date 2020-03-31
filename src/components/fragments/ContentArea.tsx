import React from "react";
import styled from "styled-components";

const ContentWapper = styled.div`
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
  padding-bottom: 30px;
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  line-height: 1.8;
  color: #434343;
`;

interface Props {
  content: any;
}

const ContentArea: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content ? (
        <ContentWapper>
          <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
        </ContentWapper>
      ) : null}
    </>
  );
};
export default ContentArea;
