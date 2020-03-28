import React from "react";
import { RouteComponentProps } from "react-router-dom";
import TitleArea from "../fragments/TitleArea";
import { getPostContentById } from "../../firebase";
import { Content } from "../shared/interface";

interface Props extends RouteComponentProps<any> {}

const DetailPost: React.FC<Props> = ({ match }) => {
  const [contentDetail, setContentDetail] = React.useState<Content | null>(
    null
  );
  React.useEffect(() => {
    getPostContentById(match.url, setContentDetail);
  }, []);
  console.log(contentDetail);
  return (
    <>
      <TitleArea content={contentDetail} />
    </>
  );
};
export default DetailPost;
