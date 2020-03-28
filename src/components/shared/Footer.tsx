import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: ${p => p.theme.padding};
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
  color: ${p => p.theme.desc_light_gray};
  background-color: ${p => p.theme.bar_light_gray};
`;

const BarSeparator = styled.div`
  /* margin: 8px; */
  margin: 8px auto 8px auto;
  /* width: 40px; */
  width: 12%;
  max-width: 50px;
  height: 4px;
  border-radius: 2px;
  background-color: ${p => p.theme.bar_light_gray};
`;

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <>
      <Wrapper>
        logo
        <BarSeparator />
      </Wrapper>
    </>
  );
};
export default Footer;
