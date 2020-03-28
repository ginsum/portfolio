import React from "react";
import Color from "color";
import { BtnWrapper } from "../../style/FragmentStyle";
import theme from "../../theme";

interface Props {
  name: string;
  submit: any;
}

const WriteBtn: React.FC<Props> = ({ name, submit }) => {
  const colorFromTheme = theme.bg_color;
  const bgColor = Color(colorFromTheme)
    .alpha(1)
    .string();
  const hoverBgColor = Color(colorFromTheme)
    .alpha(0.8)
    .string();
  const handleOnClick = () => {
    if (name === "글쓰기") {
      submit("writepost");
    }
    if (name === "로그인") {
      submit("signin");
    }
    if (name === "등록하기") {
      submit();
    }
  };
  return (
    <>
      <BtnWrapper
        _bgColor={bgColor}
        _hoverBgColor={hoverBgColor}
        onClick={handleOnClick}
      >
        {name}
      </BtnWrapper>
    </>
  );
};
export default WriteBtn;
