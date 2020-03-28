import React from "react";
import styled from "styled-components";

const ImgWapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background-color: #ddd;
  background: url(https://images.unsplash.com/photo-1584216514638-929205f5dd5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)
    no-repeat top;
`;

interface Props {}

const IntroImg: React.FC<Props> = ({}) => {
  return (
    <>
      <ImgWapper></ImgWapper>
    </>
  );
};
export default IntroImg;
