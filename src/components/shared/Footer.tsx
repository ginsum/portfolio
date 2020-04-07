import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;
  padding: ${(p) => p.theme.padding};
  padding-top: 40px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  justify-content: flex-start;
  text-align: left;
  color: white;
  background-color: #cff0da;
`;

const BarSeparator = styled.div`
  /* margin: 8px; */
  margin: 8px auto 16px auto;
  /* width: 40px; */
  width: 8%;
  max-width: 50px;
  height: 2px;
  border-radius: 1px;
  background-color: ${(p) => p.theme.bar_light_gray};
`;

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <>
      <Wrapper>
        Jung Hae Kyoung
        <Button type="link">immime12697@gmail.com</Button>
        <BarSeparator />
        Copyright © 2020 Jung HK
      </Wrapper>
    </>
  );
};
export default Footer;
