import React from "react";
import { ContentContext } from "../../store/readPost";
import TitleArea from "../fragments/TitleArea";

interface Props {}

const DetailPost: React.FC<Props> = ({}) => {
  const {
    postContent: [postContent, setPostContent]
  } = React.useContext(ContentContext);
  return (
    <>
      <TitleArea postContent={postContent} />
    </>
  );
};
export default DetailPost;
