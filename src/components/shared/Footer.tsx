import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: ${p => p.theme.padding};
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  justify-content: flex-start;
  text-align: left;
  color: white;
  background-color: ${p => p.theme.light_cool_gray};
`;

const BarSeparator = styled.div`
  /* margin: 8px; */
  margin: 8px auto 8px auto;
  /* width: 40px; */
  width: 8%;
  max-width: 50px;
  height: 2px;
  border-radius: 1px;
  background-color: ${p => p.theme.bar_light_gray};
`;

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <>
      <Wrapper>
        logo
        <BarSeparator />
        Copyright © 2020 Jung HK
      </Wrapper>
    </>
  );
};
export default Footer;
