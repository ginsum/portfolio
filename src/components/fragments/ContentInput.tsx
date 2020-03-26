import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {}

const ContentInput: React.FC<Props> = ({}) => {
  return (
    <>
      <ReactQuill placeholder="서평을 입력하세요" />
    </>
  );
};
export default ContentInput;
