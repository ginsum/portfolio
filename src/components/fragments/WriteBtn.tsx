import React from "react";
import Color from "color";
import { BtnWrapper } from "../../style/FragmentStyle";
import theme from "../../theme";
import { PostContext } from "../../store/writePost";

interface Props {
  name: string;
  submit: any;
}

const WriteBtn: React.FC<Props> = ({ name, submit }) => {
  const {
    hiddenBtn: [hiddenBtn, setHiddenBtn]
  } = React.useContext(PostContext);
  const colorFromTheme = theme.bg_color;
  const bgColor = Color(colorFromTheme)
    .alpha(1)
    .string();
  const hoverBgColor = Color(colorFromTheme)
    .alpha(0.8)
    .string();
  const handleOnClick = () => {
    if (name === "글쓰기") {
      submit("/writepost");
      setHiddenBtn(false);
    }
    if (name === "로그인") {
      submit("/signin");
      setHiddenBtn(false);
    }
    if (name === "등록하기") {
      submit();
    }
    if (name === "로그아웃") {
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
