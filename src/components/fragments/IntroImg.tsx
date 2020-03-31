import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 520px;
  padding-top: 20px;
  background: url(https://images.unsplash.com/photo-1535489487631-2058faeabfd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80)
    no-repeat center;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: ${p => p.theme.max_width};
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  font-size: 60px;
  font-weight: 800;
  padding-top: 50px;
  color: white;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  justify-content: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  justify-content: center;
  padding-top: 30px;
`;

interface Props {}

const IntroImg: React.FC<Props> = ({}) => {
  return (
    <>
      <ImgWrapper>
        <ContentWrapper></ContentWrapper>
        <TextWrapper>HELLO WORLD!</TextWrapper>
        <BtnWrapper>
          <Button
            type="primary"
            shape="round"
            style={{ width: 140, marginRight: 10 }}
          >
            <Link to="/projectlist">PROJECT</Link>
          </Button>
          <Button type="primary" shape="round" style={{ width: 140 }}>
            <Link to="/bloglist">BLOG</Link>
          </Button>
        </BtnWrapper>
      </ImgWrapper>
    </>
  );
};
export default IntroImg;
