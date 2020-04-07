import React from "react";
import styled from "styled-components";
import Highlight from "react-highlight";
import "highlight.js/styles/atelier-estuary-dark.css";

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
  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 24px;
  }
`;

interface Props {
  content: any;
}

const ContentArea: React.FC<Props> = ({ content }) => {
  const replaceContet = (content: any) => {
    if (content) {
      const descFront: string = content.content.replace(
        /<pre class="ql-syntax" spellcheck="false">/gi,
        `<pre><code class ="hljs javascript"><span class="hljs-keyword">`
      );
      const descEnd: string = descFront.replace(/pre>/gi, `span></code></pre>`);
      return descEnd;
    } else {
      return "";
    }
  };
  const desc: string = replaceContet(content);
  return (
    <>
      {content ? (
        <ContentWapper>
          {/* <Highlight>{abc}</Highlight> */}
          <div dangerouslySetInnerHTML={{ __html: desc }}></div>
        </ContentWapper>
      ) : null}
    </>
  );
};
export default ContentArea;
