import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  content: string;
  setContent: any;
}

const ContentInput: React.FC<Props> = ({ content, setContent }) => {
  return (
    <>
      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="내용을 입력하세요"
      />
    </>
  );
};
export default ContentInput;
