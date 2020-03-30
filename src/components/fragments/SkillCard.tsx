import React from "react";
import { Card, Tag } from "antd";
import styled from "styled-components";

const SkillWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: center;
`;

const SkillCardWapper = styled.div`
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

interface Props {}

const SkillCard: React.FC<Props> = ({}) => {
  return (
    <>
      <SkillWrapper>
        <SkillCardWapper>
          {/* <Card title="Skill"> */}
          <Tag color="magenta">javascript</Tag>
          <Tag color="red">react</Tag>
          <Tag color="volcano">redux</Tag>
          <Tag color="orange">typescript</Tag>
          <Tag color="gold">HTML</Tag>
          <Tag color="lime">CSS</Tag>
          <Tag color="green">Styled-component</Tag>
          <Tag color="cyan">Express</Tag>
          <Tag color="blue">mysql</Tag>
          <Tag color="geekblue">firebase</Tag>
          <Tag color="purple">react-native</Tag>
          {/* </Card> */}
        </SkillCardWapper>
      </SkillWrapper>
    </>
  );
};
export default SkillCard;
