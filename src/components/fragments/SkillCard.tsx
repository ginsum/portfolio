import React from "react";
import { PageHeader, Tag, Button, Typography } from "antd";

import styled from "styled-components";

const { Paragraph } = Typography;

const SkillWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SkillCardWapper = styled.div`
  max-width: ${(p) => p.theme.max_width};
  padding: ${(props) => props.theme.padding_content};
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

interface Props {}

const SkillCard: React.FC<Props> = ({}) => {
  return (
    <>
      <SkillWrapper>
        <SkillCardWapper>
          <PageHeader
            className="site-page-header"
            title=""
            subTitle=""
            extra={[
              <a href="https://github.com/ginsum" target="blank" key="github">
                <Button key="2" shape="round" type="primary" ghost>
                  github
                </Button>
              </a>,
              // <Button key="1" shape="round" type="primary" ghost>
              //   resume
              // </Button>,
            ]}
          >
            <Paragraph style={{ fontSize: "16px" }}>
              웹디자이너로 근무하다가 코딩에 재미를 느껴
              코드스테이츠(부트캠프)에서 교육을 받았습니다. <br />
              Javascript 기반으로 웹개발 전반에 대한 지식과 프로젝트를
              진행하였습니다. 교육 기간동안 새로운 기술을 습득하는 노하우와
              팀원들과 협업하여 프로젝트를 하는 법을 배울수 있었습니다. <br />
              프론트엔드(웹 및 앱) 개발에 관심을 가지고 공부하고 있습니다.
              앞으로 꾸준히 발전하는 개발자가 되고 싶습니다.
            </Paragraph>
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
          </PageHeader>
        </SkillCardWapper>
      </SkillWrapper>
    </>
  );
};
export default SkillCard;
