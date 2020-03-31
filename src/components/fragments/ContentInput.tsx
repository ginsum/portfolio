import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }]
    ]
  }
};

interface Props {
  content: string;
  setContent: any;
}

const ContentInput: React.FC<Props> = ({ content, setContent }) => {
  return (
    <>
      <ReactQuill
        value={content}
        modules={modules}
        onChange={setContent}
        placeholder="내용을 입력하세요"
      />
    </>
  );
};
export default ContentInput;
