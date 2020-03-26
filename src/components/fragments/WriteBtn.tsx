import React from "react";
import Color from "color";
import BtnWrapper from "../../style/ButtonStyle";
import theme from "../../theme";

interface Props {}

const WriteBtn: React.FC<Props> = ({}) => {
  const colorFromTheme = theme.bg_color;
  const bgColor = Color(colorFromTheme)
    .alpha(1)
    .string();
  const hoverBgColor = Color(colorFromTheme)
    .alpha(0.8)
    .string();
  return (
    <>
      <BtnWrapper _bgColor={bgColor} _hoverBgColor={hoverBgColor}>
        버튼
      </BtnWrapper>
    </>
  );
};
export default WriteBtn;
