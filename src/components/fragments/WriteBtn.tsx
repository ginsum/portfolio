import React from "react";
import Color from "color";
import { BtnWrapper } from "../../style/FragmentStyle";
import theme from "../../theme";

interface Props {
  name: string;
}

const WriteBtn: React.FC<Props> = ({ name }) => {
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
        {name}
      </BtnWrapper>
    </>
  );
};
export default WriteBtn;
