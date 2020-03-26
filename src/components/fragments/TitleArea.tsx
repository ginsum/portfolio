import React from "react";
import {
  TitleWrapper,
  ArticleWrapper,
  UserName,
  ContentDate
} from "../../style/FragmentStyle";

interface Props {
  postContent: any;
}

const TitleArea: React.FC<Props> = ({ postContent }) => {
  const content = postContent["1"];
  return (
    <>
      <TitleWrapper>{content.title}</TitleWrapper>
      <UserName>{content.user}</UserName>
      <ContentDate>{content.date}</ContentDate>
      <ArticleWrapper
        dangerouslySetInnerHTML={{ __html: content.content }}
      ></ArticleWrapper>
    </>
  );
};
export default TitleArea;
