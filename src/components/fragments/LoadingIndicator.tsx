import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

const Wrapper = styled.div<Props>`
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  color: grey;
`;

interface Props {}

const LoadingIndicator: React.FC<Props> = ({}) => {
  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  );
};
export default LoadingIndicator;
