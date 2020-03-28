import React from "react";
import { TitleInputWrapper } from "../../style/FragmentStyle";

interface Props {
  title: string;
  setTitle: any;
}

const TitleInput: React.FC<Props> = ({ title, setTitle }) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <>
      <TitleInputWrapper
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={handleTitleChange}
      ></TitleInputWrapper>
    </>
  );
};
export default TitleInput;
